import logo from './logo.svg';
import './App.css';
import { useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function App() {
	let { scrollY, scrollYProgress } = useScroll();
	let [conunt, setCount] = useState(true);

	useEffect(() => {
		return scrollY.onChange((latest) => {
			console.log(conunt);
			if (latest >= 300) {
				setCount(false);
			} else {
				setCount(true);
			}
			console.log('Page scroll: ', latest);
		});
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
				<img src={logo} className="App-logo" alt="logo" />
				{!conunt && (
					<motion.h1 initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
						WORKWORKWORKWORKJRIHWJHRUWRHWURHRUHWRUHRUWHRUWRHRWUHRWURHWURHWURHWUHRWU
					</motion.h1>
				)}
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
