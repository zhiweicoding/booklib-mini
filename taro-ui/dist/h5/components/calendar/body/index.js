import Nerv from "nervjs";
import * as tslib_1 from "tslib";
import dayjs from 'dayjs';
import classnames from 'classnames';
import Taro from "@tarojs/taro-h5";
import bind from 'bind-decorator';
import { View, Swiper, SwiperItem } from '@tarojs/components';
import AtCalendarDayList from '../ui/day-list/index';
import AtCalendarDateList from '../ui/date-list/index';
import generateCalendarGroup from '../common/helper';
import { delayQuerySelector } from '../../../common/utils';
const ANIMTE_DURATION = 300;
const defaultProps = {
  marks: [],
  selectedDate: {
    end: Date.now(),
    start: Date.now()
  },
  format: 'YYYY-MM-DD',
  generateDate: Date.now()
};
export default class AtCalendarBody extends Taro.Component {
  constructor(props) {
    super(...arguments);
    this.changeCount = 0;
    this.currentSwiperIndex = 1;
    this.startX = 0;
    this.swipeStartPoint = 0;
    this.isPreMonth = false;
    this.maxWidth = 0;
    this.isTouching = false;
    this.handleTouchMove = e => {
      if (!this.props.isSwiper) {
        return;
      }
      if (!this.isTouching) return;
      const { clientX } = e.touches[0];
      const offsetSize = clientX - this.startX;
      this.setState({
        offsetSize
      });
    };
    const { validDates, marks, format, minDate, maxDate, generateDate, selectedDate, selectedDates } = props;
    this.generateFunc = generateCalendarGroup({
      validDates,
      format,
      minDate,
      maxDate,
      marks,
      selectedDates
    });
    const listGroup = this.getGroups(generateDate, selectedDate);
    this.state = {
      listGroup,
      offsetSize: 0,
      isAnimate: false
    };
  }
  getGroups(generateDate, selectedDate) {
    const dayjsDate = dayjs(generateDate);
    const arr = [];
    const preList = this.generateFunc(dayjsDate.subtract(1, 'month').valueOf(), selectedDate);
    const nowList = this.generateFunc(generateDate, selectedDate, true);
    const nextList = this.generateFunc(dayjsDate.add(1, 'month').valueOf(), selectedDate);
    const preListIndex = this.currentSwiperIndex === 0 ? 2 : this.currentSwiperIndex - 1;
    const nextListIndex = this.currentSwiperIndex === 2 ? 0 : this.currentSwiperIndex + 1;
    arr[preListIndex] = preList;
    arr[nextListIndex] = nextList;
    arr[this.currentSwiperIndex] = nowList;
    return arr;
  }
  componentWillReceiveProps(nextProps) {
    const { validDates, marks, format, minDate, maxDate, generateDate, selectedDate, selectedDates } = nextProps;
    this.generateFunc = generateCalendarGroup({
      validDates,
      format,
      minDate,
      maxDate,
      marks,
      selectedDates
    });
    const listGroup = this.getGroups(generateDate, selectedDate);
    this.setState({
      offsetSize: 0,
      listGroup
    });
  }
  componentDidMount() {
    delayQuerySelector(this, '.at-calendar-slider__main').then(res => {
      this.maxWidth = res[0].width;
    });
  }
  handleTouchStart(e) {
    if (!this.props.isSwiper) {
      return;
    }
    this.isTouching = true;
    this.startX = e.touches[0].clientX;
  }
  animateMoveSlide(offset, callback) {
    this.setState({
      isAnimate: true
    }, () => {
      this.setState({
        offsetSize: offset
      });
      setTimeout(() => {
        this.setState({
          isAnimate: false
        }, () => {
          callback && callback();
        });
      }, ANIMTE_DURATION);
    });
  }
  handleTouchEnd() {
    if (!this.props.isSwiper) {
      return;
    }
    const { offsetSize } = this.state;
    this.isTouching = false;
    const isRight = offsetSize > 0;
    const breakpoint = this.maxWidth / 2;
    const absOffsetSize = Math.abs(offsetSize);
    if (absOffsetSize > breakpoint) {
      const res = isRight ? this.maxWidth : -this.maxWidth;
      return this.animateMoveSlide(res, () => {
        this.props.onSwipeMonth(isRight ? -1 : 1);
      });
    }
    this.animateMoveSlide(0);
  }
  handleChange(e) {
    const { current, source } = e.detail;
    if (source === 'touch') {
      this.currentSwiperIndex = current;
      this.changeCount = this.changeCount + 1;
    }
  }
  handleAnimateFinish() {
    if (this.changeCount > 0) {
      this.props.onSwipeMonth(this.isPreMonth ? -this.changeCount : this.changeCount);
      this.changeCount = 0;
    }
  }
  handleSwipeTouchStart(e) {
    const { clientY, clientX } = e.changedTouches[0];
    this.swipeStartPoint = this.props.isVertical ? clientY : clientX;
  }
  handleSwipeTouchEnd(e) {
    const { clientY, clientX } = e.changedTouches[0];
    this.isPreMonth = this.props.isVertical ? clientY - this.swipeStartPoint > 0 : clientX - this.swipeStartPoint > 0;
  }
  render() {
    const { isSwiper } = this.props;
    const { isAnimate, offsetSize, listGroup } = this.state;
    if (!isSwiper) {
      return <View className={classnames('main', 'at-calendar-slider__main', `at-calendar-slider__main--${"h5"}`)}>
          <AtCalendarDayList />
          <View className="main__body body">
            <View className="body__slider body__slider--now">
              <AtCalendarDateList list={listGroup[1].list} onClick={this.props.onDayClick} onLongClick={this.props.onLongClick} />
            </View>
          </View>
        </View>;
    }
    /* ?????? Taro ??????????????? Swiper ??? ????????? ??? H5 ?????????????????????  */
    {
      return <View className={classnames('main', 'at-calendar-slider__main', `at-calendar-slider__main--${"h5"}`)} onTouchEnd={this.handleTouchEnd} onTouchMove={this.handleTouchMove} onTouchStart={this.handleTouchStart}>
          <AtCalendarDayList />
          <View className={classnames('main__body  body', {
          'main__body--slider': isSwiper,
          'main__body--animate': isAnimate
        })} style={{
          transform: isSwiper ? `translateX(-100%) translate3d(${offsetSize},0,0)` : '',
          WebkitTransform: isSwiper ? `translateX(-100%) translate3d(${offsetSize}px,0,0)` : ''
        }}>
            <View className="body__slider body__slider--pre">
              <AtCalendarDateList list={listGroup[0].list} />
            </View>
            <View className="body__slider body__slider--now">
              <AtCalendarDateList list={listGroup[1].list} onClick={this.props.onDayClick} onLongClick={this.props.onLongClick} />
            </View>
            <View className="body__slider body__slider--next">
              <AtCalendarDateList list={listGroup[2].list} />
            </View>
          </View>
        </View>;
    }
    return <View className={classnames('main', 'at-calendar-slider__main', `at-calendar-slider__main--${"h5"}`)}>
        <AtCalendarDayList />
        <Swiper circular current={1} skipHiddenItemLayout className={classnames('main__body')} onChange={this.handleChange} vertical={this.props.isVertical} onAnimationFinish={this.handleAnimateFinish} onTouchEnd={this.handleSwipeTouchEnd} onTouchStart={this.handleSwipeTouchStart}>
          {listGroup.map((item, key) => <SwiperItem key={item.value} itemId={key.toString()}>
              <AtCalendarDateList list={item.list} onClick={this.props.onDayClick} onLongClick={this.props.onLongClick} />
            </SwiperItem>)}
        </Swiper>
      </View>;
  }
}
AtCalendarBody.options = { addGlobalClass: true };
AtCalendarBody.defaultProps = defaultProps;
tslib_1.__decorate([bind], AtCalendarBody.prototype, "getGroups", null);
tslib_1.__decorate([bind], AtCalendarBody.prototype, "handleTouchStart", null);
tslib_1.__decorate([bind], AtCalendarBody.prototype, "handleTouchEnd", null);
tslib_1.__decorate([bind], AtCalendarBody.prototype, "handleChange", null);
tslib_1.__decorate([bind], AtCalendarBody.prototype, "handleAnimateFinish", null);
tslib_1.__decorate([bind], AtCalendarBody.prototype, "handleSwipeTouchStart", null);
tslib_1.__decorate([bind], AtCalendarBody.prototype, "handleSwipeTouchEnd", null);