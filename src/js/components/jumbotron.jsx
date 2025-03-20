import React from "react";

const Jumbotron = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="container-lg bg-light rounded-3 text-center p-4 mb-5">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold text-start">A Warm Welcome!</h1>
                    <p className="fs-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore facere distinctio voluptates quia officiis unde nobis neque veniam hic. Sequi totam laudantium, velit a quaerat deleniti blanditiis facere reiciendis cumque!
                    </p>
                    <button className="btn btn-primary btn-lg" type="button">
                        Call to action!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;
