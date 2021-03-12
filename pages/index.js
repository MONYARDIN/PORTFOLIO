import Layout from "../components/Layout";

const Index = () => (
    <Layout>
        {/**Header Card */}
        <header className="row">
            <div className="col-md-12">
                <div className = "card card-body bg-secondary text-light">
                    <div className = "row">
                        <div className = "col-md-4">
                            <img src="cara.jpg" alt ="" className = "img-fluid"/>
                        </div>
                        
                        <div className = "col-md-8">
                            <h1>Roberto Monjardin</h1>
                            <h3>Computer En
                                gineer Systems</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sunt vitae, esse recusandae aliquam veniam, ipsa voluptates aliquid consequatur laborum, accusantium aut cum! Id ipsum eaque quas in\
                                ventore magnam esse ut labore eum expedita incidunt dolores consequuntur, voluptates consequatur commodi exercitationem aliquid illo ea et. Corrupti similique atque ullam numquam?
                            </p>
                            <a href = "/hireme">Hire Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/**Second Section */}
        <div className = "row">
            <div className = "col-md-4">

            </div>
            <div className = "col-md-8">

            </div>
        </div>
    </Layout>
);

export default Index;
