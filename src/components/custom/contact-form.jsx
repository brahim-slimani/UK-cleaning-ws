import React from 'react';

export const ContactForm = () => {
    return (
        <section id="contact-form" class="question_sec pt-90 pt-xs-40 mb-">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="email_gardener">
                            <div class="section_tit light-color">
                                <h2>Have Any Question</h2>
                                <span class="three_line"></span>
                            </div>
                            <div class="text_heading mb-30 light-color">
                                <p>
                                    Lorem ipsum dolor sit amet, ligula vestibulum nunc dis ipsum, et nam, cras nec lacus amet, ut mauris erat mattis neque a quis. Vivamus donec dolor consectetuer congue.
                                </p>
                            </div>
                            <div class="email_fill pb-5">
                                <form>
                                    <div class="d-flex">
                                        <div className="form-field">
                                            <input class="input-md" id="name" type="text" name="form-name" placeholder="Your name" />
                                        </div>
                                        <div className="form-field">
                                            <input class="input-md" id="email" type="text" name="form-email" placeholder="Your Email" />
                                        </div>
                                    </div>
                                    <div class="d-flex">
                                        <div className="form-field">
                                            <input class="input-md" id="subject" type="text" name="form-subject" placeholder="Your subject" />
                                        </div>
                                        <div className="form-field">
                                            <input class="input-md" id="phone-number" type="text" name="form-phone" placeholder="Your phone number" />
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <textarea className="input-md" type="text" id="message" name="form-message" placeholder="Your message" />
                                    </div>

                                    <button class="btn-text" type="button" id="submit" name="button">
                                        <i className="fa fa-check-circle" /> SUBMIT
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <div class="col-lg-4 mt-sm-30 mt-xs-30">
                        <figure style={{ marginTop: "13rem" }}>
                            <img src="assets/images/img4.png" alt="" />
                        </figure>
                    </div> */}
                </div>
            </div>
        </section>
    );
}