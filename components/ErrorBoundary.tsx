"use client"

import React, {ErrorInfo, ReactNode} from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    // Define a state variable to track whether there is an error or not
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return {hasError: true};
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can use your own error logging service here
    console.log({error, errorInfo});
  }

  render(): JSX.Element | React.ReactNode {
    const {hasError}: { hasError: boolean } = this.state;
    const { children }: { children: React.ReactNode } = this.props;

    // Check if an error is thrown
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h2>Oops, there is an error susant!</h2>
          <button
            type="button"
            onClick={(): void => this.setState({hasError: false})}
          >
            Try again?
          </button>
        </div>
      );
    }

    // Return children components in case of no error
    return children;
  }

}

export default ErrorBoundary;
