import React from 'react';

const Modal = (props) => {
    // console.log(props.singleData);
    const {image_link, description, integrations, features} = props.singleData;
    // console.log(integrations);
    // console.log(Object.values(features || {}));
    return (
        <div>
            <dialog id="my_modal_4" className="modal">
            <form method="dialog" className="modal-box w-11/12 max-w-5xl">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <div className="card-body border-2 border-accent mr-2">
                        <h2 className='card-title'>{description ? description : "Not Found"}</h2>

                        <div className='flex justify-between'>
                        <div>
                            <h1 className='text-xl font-bold'> Features </h1>
                            {
                                Object.values(features || {}).map(value => <p>{value.feature_name ? value.feature_name: "Not Found"}</p>)
                            }
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'> Integrations </h1>
                            {
                                integrations && integrations.map((int) => <p>{int ? int: "Not Found"}</p>)
                            }
                        </div>
                        </div>
                    </div>
                    <figure className='w-full'><img className='w-full h-96' src={image_link && image_link[0]} alt=""/></figure>
                </div>
                <div className="modal-action">
                {/* if there is a button, it will close the modal */}
                <button className="btn">Close</button>
                </div>
            </form>
            </dialog>
        </div>
    );
};

export default Modal;