import { useState } from "react";

function Register(){

    const [ userName, setUserName ] = useState("");
    const [ emailAddress, setEmailAddress ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ revisedPassowrd, setRevisedPassword ] = useState("");

    function register_user(){
        console.log(userName);
        console.log(emailAddress);
        console.log(password);
        console.log(revisedPassowrd);

    }
    
    return (
        <div className="min-h-screen bg-[#0A0E1A] text-[#F9FAFB] flex flex-col justify-center items-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md bg-[#111827] border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col gap-6">
                
                {/* Header */}
                <div className="flex flex-col items-center text-center">
                    <div className="bg-[#0A0E1A] border border-gray-800 rounded-2xl p-3.5 w-14 h-14 mx-auto flex items-center justify-center text-amber-400 mb-3 shadow-inner">
                        <span className="text-2xl">⚔️</span>
                    </div>
                    <h1 className="text-2xl font-black text-[#F9FAFB] tracking-tight">Create Account</h1>
                    <p className="text-sm text-gray-400 mt-1">Join Quiz Arena to compete and track your rank</p>
                </div>

                {/* Form */}
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    {/* Full Name */}
                    <div>
                        <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-1.5">
                            Full Name
                        </label>
                        <input
                            type="text"
                            onChange={(e) => {setUserName(e.target.value)}}
                            placeholder="e.g. John Doe"
                            className="w-full bg-[#0A0E1A] border border-gray-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-[#F9FAFB] placeholder:text-gray-500 rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
                        />
                    </div>

                    {/* Email Address */}
                    <div>
                        <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-1.5">
                            Email Address
                        </label>
                        <input
                            type="email"
                            onChange={(e)=> {setEmailAddress(e.target.value)}}
                            placeholder="you@example.com"
                            className="w-full bg-[#0A0E1A] border border-gray-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-[#F9FAFB] placeholder:text-gray-500 rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-1.5">
                            Password
                        </label>
                        <input
                            type="password"
                            onChange={(e)=>{setPassword(e.target.value)}}
                            placeholder="At least 6 characters"
                            className="w-full bg-[#0A0E1A] border border-gray-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-[#F9FAFB] placeholder:text-gray-500 rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-1.5">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            onChange={(e) => {setRevisedPassword(e.target.value)}}
                            placeholder="Re-enter your password"
                            className="w-full bg-[#0A0E1A] border border-gray-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-[#F9FAFB] placeholder:text-gray-500 rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
                        />
                    </div>

                    {/* Terms & Privacy */}
                    <div className="flex items-start">
                        <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            className="mt-0.5 h-4 w-4 rounded border-gray-800 bg-[#0A0E1A] text-amber-500 focus:ring-amber-500 accent-amber-500 cursor-pointer"
                        />
                        <label htmlFor="terms" className="ml-2 block text-xs text-gray-400 cursor-pointer select-none">
                            I agree to the <a href="#" className="text-amber-400 hover:text-amber-300 underline">Terms of Service</a> and <a href="#" className="text-amber-400 hover:text-amber-300 underline">Privacy Policy</a>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        onClick={register_user}
                        className="w-full mt-2 bg-amber-500 hover:bg-amber-400 text-black font-extrabold py-3 px-4 rounded-xl text-sm transition duration-200 shadow-lg shadow-amber-500/20 active:scale-[0.98] cursor-pointer"
                    >
                        Create Account
                    </button>
                </form>

                {/* Footer */}
                <div className="text-center text-xs text-gray-400 border-t border-gray-800/80 pt-4">
                    Already have an account?{' '}
                    <a href="/login" className="font-bold text-amber-400 hover:text-amber-300 transition-colors">
                        Sign In
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Register;