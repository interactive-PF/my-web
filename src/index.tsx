import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// import reportWebVitals from './reportWebVitals';

// 쿼리 클라이언트 객체 생성
const queryClient = new QueryClient({
	// 모든 쿼리에 사용되는 기본 옵션
	defaultOptions: {
		queries: {
			// retry: 5, (기본 값: 3)
			// staleTime: 1 * 1000 * 60 * 60 * 24 * 7 // 7일간 (기본 값: 0)
			// cacheTime: 1 * 1000 * 60 * 5, // (기본 값: 5분)
		},
	},
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
