import React from 'react';

export const TeamMemberCard = (props) => {
    const {name, position, image, socialLinks} = props;
    return (
        <div class="col-lg-3 col-md-6 mt-xs-30">
            <div class="team_box img-scale">
                <div class="team_picher">
                    <figure>
                        <img src={image} alt="" />
                    </figure>
                </div>
                <div class="team_detail">
                    <h3>{name}</h3>
                    <span>{position}</span>
                </div>
                <div class="team_text">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div class="social_team">
                    <ul>
                        <li>
                            <a href={socialLinks.fb}><i class="fa fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href={socialLinks.twitter}><i class="fa fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href={socialLinks.linkedIn}><i class="fa fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a href={socialLinks.youtube}><i class="fa fa-youtube"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}