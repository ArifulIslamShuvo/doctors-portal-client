import React from 'react';
import { format } from 'date-fns';


const BookingModal = ({ treatment, date, setTreatment }) => {
    const {_id, name, slots } = treatment;
    const handleBooking = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        console.log(_id, slot, name, email, phone);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle btn-secondary absolute right-2 top-2 text-white">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}!</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-5'>
                        <input type="text" readOnly value={format(date, 'PP')} className="input input-bordered input-secondary w-full max-w-xs" />
                        
                        <select name='slot' class="select select-secondary select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Email Address" className="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;