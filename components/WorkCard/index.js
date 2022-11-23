import React from 'react';
import Image from 'next/image';

const WorkCard = ({ img, name, description, onClick }) => {
	return (
		<div
			className='overflow-hidden cursor-pointer rounded-lg p-4 mob:p-2 laptop:p-4 first:ml-0 gap-2'
			onClick={onClick}
		>
			<div
				className='overflow-hidden rounded-lg transition-all ease-out duration-300 hover:scale-95 mob:h-48'
				style={{ height: '600px' }}
			>
				<picture>
					<Image
						alt={name}
						className='h-full w-full object-cover'
						src={img}
						height={426}
						width={640}
					/>
				</picture>
			</div>
			<h1 className='mt-5 text-3xl font-medium'>
				{name ? name : 'Project Name'}
			</h1>
			<h2 className='text-xl opacity-50'>
				{description ? description : 'Description'}
			</h2>
		</div>
	);
};

export default WorkCard;
