import React from 'react';

export const FeatureItem = (props) => {
    let { icon, title, content } = props;
    content = "Lorem Ipsum is simply text the printing and typesetting standard industry."
    return (
        <div class="col-lg-3 col-md-6 mt-sm-30">
            <div class="clean_top mb-xs-30 feature-box">
                <div class="content">
                    <img src={icon} alt="" height="50" width="50" />
                    <h3>{title}</h3>
                    <p>
                        {content}
                    </p>
                </div>
            </div>
        </div>
    );
}