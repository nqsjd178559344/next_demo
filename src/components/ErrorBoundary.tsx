import React from "react";
// import { Button } from "antd";

export type ErrorBoundaryProps = {
  children: React.ReactNode;
};

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI

    return { hasError: true };
  }

  render() {
    // Check if the error is thrown
    const { hasError } = this.state;
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center">
            <h1 className="text-lg mr-2">页面发生错误！</h1>

            <button onClick={() => this.setState({ hasError: false })}>
              刷新
            </button>
          </div>
          <pre className="text-gray-500 break-all mt-4">未知错误</pre>
        </div>
      );
    }

    // Return children components in case of no error

    return this.props.children;
  }
}

export default ErrorBoundary;
