import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home';
import FormListPage from '../pages/form';
import NewFormPage from '../pages/form/new';
import AnswerPage from '../pages/form/answer';

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/form" element={<FormListPage />} />
			<Route path="/form/new" element={<NewFormPage />} />
			<Route path="/answer/:id" element={<AnswerPage />} />
			<Route path="*" element={<Navigate replace to="/" />} />
		</Routes>
	);
};

export default Router;
