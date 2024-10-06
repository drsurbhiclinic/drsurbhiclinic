function Stats() {
    return (
        <div className="row justify-content-end">
            <div className="col-lg-11">
                <div className="row justify-content-end">

                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                        <div className="count-box py-5">
                        <i className="bi bi-emoji-smile"></i>
                        <span className="wrapper-span"><div data-purecounter-start="0" data-purecounter-end="50000" className="purecounter">0</div> +</span>
                        <p>Happy Patients</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                        <div className="count-box py-5">
                        <i className="bi bi-prescription2"></i>
                        <span className="wrapper-span"><div data-purecounter-start="0" data-purecounter-end="5000" className="purecounter">0</div> +</span>
                        <p>Surgeries</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                        <div className="count-box pb-5 pt-0 pt-lg-5">
                        <i className="bi bi-clock"></i>
                        <span className="wrapper-span"><div data-purecounter-start="0" data-purecounter-end="23" className="purecounter">0</div></span>
                        <p>Years of experience</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                        <div className="count-box pb-5 pt-0 pt-lg-5">
                        <i className="bi bi-award"></i>
                        <span className="wrapper-span"><div data-purecounter-start="0" data-purecounter-end="5" className="purecounter">0</div></span>
                        <p>Awards</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Stats;