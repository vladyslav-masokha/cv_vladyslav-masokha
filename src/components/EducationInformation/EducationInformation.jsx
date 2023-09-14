import './EducationInformation.scss';

function EducationInformation({ education }) {
	return (
		<section className='cvEducation'>
			<p className='education'>
				<i className='fa-solid fa-graduation-cap'></i>
				<b>Education: </b>
				<ul>
					{education.education
						? education.education.map((education, index) => (
							<li key={index}>{education}</li>
						))
						: null}
				</ul>
			</p>

			<div className='courses'>
				<i className='fa-brands fa-discourse'></i>
				<b>Courses: </b>
				<ul>
					{education.itCourses
						? education.itCourses.map((course, index) => (
								<li key={index}>{course}</li>
						  ))
						: null}
				</ul>
			</div>

			<div className='certificates'>
				<i className='fa-solid fa-certificate'></i>
				<b>Certificates: </b>
				<ul>
					{education.certificatesURL
						? education.certificatesURL.map((certificate, index) => (
								<li key={index}>
									<a href={certificate}>{certificate}</a>
								</li>
						  ))
						: null}
				</ul>
			</div>

			<div className='softSkills'>
				<i className='fa-solid fa-code'></i>
				<b>Soft Skills: </b>
				<ul>
					{education.softSkills
						? education.softSkills.map((softSkill, index) => (
								<li key={index}>{softSkill}</li>
						  ))
						: null}
				</ul>
			</div>

			<p className='additionalInfo'>
				<i className='fa-solid fa-laptop-code'></i>
				<b>Additional information: </b>
				{education.additionalInfo}
			</p>
		</section>
	);
}

export default EducationInformation;
