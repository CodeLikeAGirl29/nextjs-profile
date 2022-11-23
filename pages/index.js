import { useRef } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';
import Socials from '../components/Socials';
import WorkCard from '../components/WorkCard';
import { useIsomorphicLayoutEffect } from '../utils';
import { stagger } from '../animations';
import Footer from '../components/Footer';


// Local Data
import data from '../yourData';

export default function Home() {
	// Ref
	const workRef = useRef();
	const aboutRef = useRef();
	const textOne = useRef();
	const textTwo = useRef();
	const textThree = useRef();
	const textFour = useRef();

	// Handling Scroll
	const handleWorkScroll = () => {
		window.scrollTo({
			top: workRef.current.offsetTop,
			left: 0,
			behavior: 'smooth',
		});
	};

	const handleAboutScroll = () => {
		window.scrollTo({
			top: aboutRef.current.offsetTop,
			left: 0,
			behavior: 'smooth',
		});
	};

	useIsomorphicLayoutEffect(() => {
		stagger(
			[textOne.current, textTwo.current, textThree.current, textFour.current],
			{ y: 30 },
			{ y: 0 }
		);
	}, []);

	return (
		<>
			<Head>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta charSet='utf-8' />
				<title>{data.name}</title>
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
				/>
			</Head>
			<div className='container mx-auto mb-10'>
				<Header
					handleWorkScroll={handleWorkScroll}
					handleAboutScroll={handleAboutScroll}
				/>
				<div className='laptop:mt-20 mob:mt-10'>
					<div className='mt-5'>
						<h1
							ref={textOne}
							className='mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6x'
						>
							{data.headerTaglineOne}
						</h1>
						<h1
							ref={textTwo}
							className='text-3xl mob:text-6xl laptop:text-6xl mob:p-2 w-4/5 mob:w-full laptop:w-4/5 block text-pink-500'
						>
							{data.headerTaglineTwo}
						</h1>
						<h1
							ref={textThree}
							className='text-2xl mob:text-3xl laptop:text-6xl mob:p-2 w-4/5 mob:w-full laptop:w-4/5'
						>
							{data.headerTaglineThree}
						</h1>
						<h1
							ref={textFour}
							className='text-2xl mob:text-3xl laptop:text-6xl mob:p-2 w-4/5 mob:w-full laptop:w-4/5'
						>
							{data.headerTaglineFour}
						</h1>
					</div>

					<Socials className='mt-5 mob:mt-2 laptop:mt-5' />
				</div>
				<div
					className='mt-40 mob:mt-10 laptop:mt-40 mob:p-2 laptop:p-0'
					ref={workRef}
				>
					<h1 className='text-2xl text-bold'>Projects.</h1>
					<div className='mt-10 mob:mt-5 laptop:mt-10 grid grid-cols-2 mob:grid-cols-1 laptop:grid-cols-2 gap-5'>
						{data.projects.map((project, index) => (
							<WorkCard
								key={index}
								img={project.imageSrc}
								name={project.title}
								description={project.description}
								onClick={() => window.open(project.url)}
							/>
						))}
					</div>
				</div>
				<div className='mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0'>
					<h1 className='text-4xl text-bold'>Services.</h1>
					<div className='mt-10 grid grid-cols-2 mob:grid-cols-1 laptop:grid-cols-2 gap-6'>
						{data.services.map((service, index) => (
							<ServiceCard
								key={index}
								name={service.title}
								description={service.description}
							/>
						))}
					</div>
				</div>
				<div
					className='mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0'
					ref={aboutRef}
				>
					<h1 className='text-4xl text-bold'>About.</h1>
					<p className='m-5 mob:m-0 laptop:m-5 mob:mt-2 laptop:ml-0 ml-0 text-3xl mob:text-xl laptop:text-3xl w-3/5 mob:w-full laptop:w-3/5'>
						{data.aboutpara}
					</p>
				</div>
				<Footer />
			</div>
		</>
	);
}
