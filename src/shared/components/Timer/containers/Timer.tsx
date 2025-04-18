import { Component } from "react";
import TimerView from "../components";

interface TimerProps {
  onTimeUp: (isTimeUp: boolean) => void;
  isWin: boolean;
  closeOverlay: boolean;
}

interface TimerState {
  value: string;
  isTimeUp: boolean;
  duration: number;
}

class Timer extends Component<TimerProps, TimerState> {
  private timer: ReturnType<typeof setInterval> | null = null;

  constructor(props: TimerProps) {
    super(props);

    this.state = {
      value: "",
      isTimeUp: false,
      duration: 60,
    };

    this.handleTimer = this.handleTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  componentDidMount(): void {
    if (this.props.closeOverlay) {
      this.handleTimer();
    }
  }

  componentDidUpdate(prevProps: TimerProps): void {
    if (this.props.closeOverlay && !prevProps.closeOverlay) {
      this.handleTimer();
    }
  }

  componentWillUnmount(): void {
    this.stopTimer();
  }

  handleTimer(): void {
    if (this.state.duration > 0 && !this.timer) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  stopTimer(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  countDown(): void {
    // @ts-ignore
    this.setState((prevState) => {
      const newDuration = prevState.duration - 1;
      if (this.props.isWin) {
        this.stopTimer();
      }
      if (newDuration === 0) {
        this.stopTimer();
        this.props.onTimeUp(true);
        return { duration: 0, isTimeUp: true };
      }
      return { duration: newDuration };
    });
  }

  render() {
    return (
      <TimerView
        duration={this.state.duration}
        isTimeUp={this.state.isTimeUp}
        handleTimer={this.handleTimer}
      />
    );
  }
}

export default Timer;
