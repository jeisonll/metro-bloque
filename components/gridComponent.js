export default function GridComponent(){

    return(
        <>
            <div className="container justify-content-center">
                <div className="row">
                    <div className="col-sm-3 bg-primary mx-2" id="imageGrid">
                        <div className=""  style={{width: "18rem"}}>
                            <div className="car">
                                <h5 className="title">Card title</h5>
                                <p className="">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas , las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-7  ">
                        <div className="row">
                            <div className="col-8 col-sm-6 bg-success " id="imageGrid">
                                <div className=""  style={{width: "18rem"}}>
                                    <div className="car">
                                        <h5 className="title">Card title</h5>
                                        <h6 className="subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="text">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 col-sm-5 bg-danger mx-2 " id="imageGrid">
                                <div className=""  style={{width: "18rem"}}>
                                    <div className="car">
                                        <h5 className="title">Card title</h5>
                                        <h6 className="subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-12 col-sm-11 bg-warning mt-2" id="imageGrid">
                                <div className=""  >
                                    <div className="car">
                                        <h5 className="title">Card title</h5>
                                        <h6 className="subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="text">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas  las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx global>
                    {`
                    #imageGrid{ 
                    
                    position: center
                    }
                    #imageGrid:hover{
                    background: url("https://i.pinimg.com/originals/2a/70/dd/2a70ddeb11454102b58ed887899868c0.png");
                    }                    
`}
                </style>
            </div>
        </>
    )
}