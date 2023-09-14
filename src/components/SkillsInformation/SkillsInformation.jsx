import './SkillsInformation.scss';

function SkillsInformation({ skills }) {
	return (
		<section className='cvSkills'>
			<p className='objectives'>
				<i className='fa-solid fa-briefcase'></i>
				<b>Carrier objectives: </b>
				{skills.objectives}
			</p>
			<p className='summary'>
				<i className='fa-solid fa-globe'></i>
				<b>Summary: </b>
				{skills.summary}
			</p>
			<p className='projects'>
				I would like to invite you to review some projects in my github:
				<ul>
					{skills.projURL
						? skills.projURL.map((url, index) => (
								<li key={index}>
									<a href={url}>{url}</a>
								</li>
						  ))
						: null}
				</ul>
			</p>
			<div className='skills'>
				<i className='fa-solid fa-rectangle-list'></i>
				<b>Skills: </b>
				<ul>
					{skills.skills
						? skills.skills.map((skill, index) => <li key={index}>{skill}</li>)
						: null}
				</ul>
			</div>
		</section>
	);
}

export default SkillsInformation;
