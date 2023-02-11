import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import svg from '../../components/assets/index';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

Contact.propTypes = {};

function Contact(props) {
    return (
        <div className={cx('wrapper')}>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1 className={cx('title')}>Have some Question?</h1>
                        <hr />
                    </div>
                </div>
                <div className="">
                    <div className="col-md flex mbi:flex-col-reverse sm:flex-row justify-center">
                        <form class="w-full max-w-lg">
                            <div class="w-full px-3">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-password"
                                >
                                    Full name
                                </label>
                                <input
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-password"
                                    type="text"
                                    placeholder="Phuong Lam"
                                />
                            </div>
                            <div class="w-full px-3">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-password"
                                >
                                    Email
                                </label>
                                <input
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-password"
                                    type="email"
                                    placeholder="PhuongLam@gmail.com"
                                />
                            </div>

                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 font-bold">
                                Your message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                class="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Write your thoughts here..."
                            ></textarea>
                            <button
                                type="button"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-1"
                            >
                                Submit
                            </button>
                        </form>
                        <div className="ml-12">
                            <img
                                src="/assets/contact.png"
                                alt="background"
                                width="380px"
                                height="380px"
                                className="mr-8"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
