import React, { ErrorInfo } from "react";

interface IProps {
  children: React.ReactNode;
}

interface IState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends React.Component<IProps, IState> {
  // Constructor for initializing Variables etc in a state
  // Just similar to initial line of useState if you are familiar
  // with Functional Components
  constructor(props: IProps) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  // This method is called if any error is encountered
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Catch errors in any components below and
    // re-render with error message
    this.setState({
      error,
      errorInfo,
    });

    // You can also log error messages to an error
    // reporting service here
  }

  // This will render this component wherever called
  render() {
    const { errorInfo, error } = this.state;
    const { children } = this.props;
    if (errorInfo) {
      // Error path
      return (
        <div>
          <h2>An Error Has Occurred</h2>
          <details>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children, i.e. in
    // case no error is Found
    return children;
  }
}

export default ErrorBoundary;
