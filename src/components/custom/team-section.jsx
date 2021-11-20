import React from 'react';
import { TeamMemberCard } from 'components/shared';

export const TeamSection = () => {

	const teams = [
		{
			name: "Josh Philippe",
			position: "Manager",
			image: "assets/images/team/team1.jpg",
			socialLinks: { fb: "#", linkedIn: "#", twitter: "#", youtube: "#" }
		},
		{
			name: "Marcus Stoinis",
			position: "Cleaning Agent",
			image: "assets/images/team/team2.jpg",
			socialLinks: { fb: "#", linkedIn: "#", twitter: "#", youtube: "#" }
		},
		{
			name: "Jackson Coleman",
			position: "Cleaning Agent",
			image: "assets/images/team/team3.jpg",
			socialLinks: { fb: "#", linkedIn: "#", twitter: "#", youtube: "#" }
		},
		{
			name: "Mackenzie Harvey",
			position: "Supervisor",
			image: "assets/images/team/team4.jpg",
			socialLinks: { fb: "#", linkedIn: "#", twitter: "#", youtube: "#" }
		}
	]

	return (
		<section id="team" class="padding ptb-xs-40">
			<div class="container">
				<div class="row text-center mb-40 mb-xs-30">
					<div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
						<div class="section-title_home">
							<h2>Our Team</h2>
							<span class="b-line"></span>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 's standard dummy text.
							</p>
						</div>
					</div>
				</div>

				<div class="row">
					{
						teams.map((teammate, index) => <TeamMemberCard key={index} {...teammate} />)
					}
				</div>

			</div>
		</section>

	);
}