import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate} from 'react-router-dom';
import auth from '../../firebase.init';


const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating] = useUpdateProfile(auth);


    const navigate = useNavigate();
    const location = useLocation() ;


    let from = location.state?.from?.pathname || "/";

      let signInError;

      if (error) {
        
        signInError = <p className='text-[red]'>{error?.message}</p>

      }


      if (loading || updating) {
    

        return <button class="btn loading"> Loading</button>

      }


    


    

    const onSubmit = async (data) => {

        

        
        const email = data.email;
        const password = data.password;
        const name = data.name;
        const number = data.phone; 
        const user = { email, password ,number, name };

    
        
        await createUserWithEmailAndPassword(data.email , data.password) ;
        await updateProfile({ displayName: name });
        
        

        fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(user)
        })

            .then(res => res.json())
            .then(user => {
                
                alert('users added done');
                navigate(from, { replace: true });

            })

    }

    return (
        <div className='flex  justify-center items-center'>
            <div className="card w-96 my-5  bg-[#511849]">

                <div className="card-body">
                    <h2 class=" text-center font-bold text-white  text-2xl">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text text-white">Name</span>

                            </label>

                            <input

                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {

                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />

                            <label className="label">

                                {errors.name?.type === "required" &&

                                    <span className="label-text-alt text-[red] text-lg">
                                        {errors.name.message}
                                    </span>
                                }

                            </label>

                        </div>

                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text text-white">Phone Number</span>

                            </label>

                            <input

                                type="number"
                                placeholder="Enter your number"
                                className="input input-bordered w-full max-w-xs"
                                {...register("phone", {

                                    required: {
                                        value: true,
                                        message: 'Phone  Number is Required'
                                    }
                                })}
                            />

                            <label className="label">

                                {errors.phone?.type === "required" &&

                                    <span className="label-text-alt text-[red] text-lg">
                                        {errors.phone.message}
                                    </span>
                                }

                            </label>

                        </div>

                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text text-white">Email</span>

                            </label>

                            <input

                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {

                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a Valid Email'
                                    }
                                })}
                            />

                            <label className="label">

                                {errors.email?.type === "required" &&

                                    <span className="label-text-alt text-[red] text-lg">
                                        {errors.email.message}
                                    </span>
                                }

                                {errors.email?.type === "pattern" &&

                                    <span className="label-text-alt text-[red] text-lg">
                                        {errors.email.message}
                                    </span>
                                }

                            </label>

                        </div>

                        
                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text text-white">Password</span>

                            </label>

                            <input

                                type="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {

                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Password must be 8 character or longer'
                                    }
                                })}
                            />

                            <label className="label">

                                {errors.password?.type === "required" &&

                                    <span className="label-text-alt text-[red] text-lg">
                                        {errors.password.message}
                                    </span>
                                }

                                {errors.password?.type === "minLength" &&

                                    <span className="label-text-alt text-[red] text-lg">
                                        {errors.password.message}
                                    </span>
                                }

                            </label>

                        </div>

                        {signInError}
                        
                        <input class="bg-[#C70039] mt-3 px-16 py-3 font-bold font-sans rounded block mx-auto text-lg text-white cursor-pointer" type="submit" value='Submit' />


                    </form>

                    <p className='text-white'><small>Already have an account ? <Link className='text-[blue] font-semibold' to='/login'> Please Login </Link> </small></p>

                </div>

            </div>
        </div>
    );
};

export default SignUp;