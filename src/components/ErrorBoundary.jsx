import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="p-8 max-w-2xl mx-auto">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong.</h1>
                    <div className="bg-red-50 p-4 rounded border border-red-200 text-red-900 overflow-auto">
                        <p className="font-mono text-sm whitespace-pre-wrap">
                            {this.state.error && this.state.error.toString()}
                        </p>
                        <br />
                        <details className="cursor-pointer">
                            <summary>Stack Trace</summary>
                            <pre className="mt-2 text-xs">
                                {this.state.errorInfo && this.state.errorInfo.componentStack}
                            </pre>
                        </details>
                    </div>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Reload Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
