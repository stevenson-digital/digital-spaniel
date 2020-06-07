import React from 'react'
import CaseStudySlider from './CaseStudySlider/CaseStudySlider'

const CaseStudySection = () => {
	return (
		<div className="CaseStudySection">
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<div className="CaseStudySection__text">
							<h2 className="f-agg-48-30">Case Studies</h2>
							<p>Every project is different. We like to work collaboratively with our clients, tailoring each project to suit the needs of you and your business.</p>
						</div>
					</div>
				</div>
			</div>
			<CaseStudySlider />
		</div>
	)
}

export default CaseStudySection
