import { Link } from 'react-router-dom';
import { FaCirclePlus } from 'react-icons/fa6';
import { FaRegFolderOpen } from 'react-icons/fa6';

const Header = () => {
	return (
		<header className="flex items-center justify-between py-6 px-12 shadow-xl mb-11 ring-1 ring-lime-600">
			<h1 className="text-3xl font-semibold text-lime-700">
				<Link to={'/'}>Noformation</Link>
			</h1>
			<nav>
				<ul className="flex gap-12 items-center">
					<li className="text-sm hover:text-lime-800 ">
						<Link to={'/form/new'} className=" flex gap-2 items-center">
							<FaCirclePlus size={30} />
							만들기
						</Link>
					</li>
					<li className="text-sm hover:text-lime-800 ">
						<Link to={'/form'} className=" flex gap-2 items-center">
							<FaRegFolderOpen size={35} />
							관리
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
