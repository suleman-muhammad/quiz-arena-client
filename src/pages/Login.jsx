function Login(){

    return (
        <div className="min-h-screen bg-[#0A0E1A] text-[#F9FAFB] flex flex-col justify-center items-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md bg-[#111827] border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col gap-6">
                
                {/* Header */}
                <div className="flex flex-col items-center text-center">
                    <div className="bg-[#0A0E1A] border border-gray-800 rounded-2xl p-3.5 w-14 h-14 mx-auto flex items-center justify-center text-amber-400 mb-3 shadow-inner">
                        <span className="text-2xl">⚡</span>
                    </div>
                    <h1 className="text-2xl font-black text-[#F9FAFB] tracking-tight">Welcome Back</h1>
                    <p className="text-sm text-gray-400 mt-1">Log in to enter the Quiz Arena</p>
                </div>

                {/* Form */}
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    {/* Username or Email */}
                    <div>
                        <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-1.5">
                            Username or Email
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your username or email"
                            className="w-full bg-[#0A0E1A] border border-gray-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-[#F9FAFB] placeholder:text-gray-500 rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <div className="flex items-center justify-between mb-1.5">
                            <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300">
                                Password
                            </label>
                            <a href="#" className="text-xs text-amber-400 hover:text-amber-300 transition-colors">
                                Forgot password?
                            </a>
                        </div>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full bg-[#0A0E1A] border border-gray-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-[#F9FAFB] placeholder:text-gray-500 rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
                        />
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-800 bg-[#0A0E1A] text-amber-500 focus:ring-amber-500 accent-amber-500 cursor-pointer"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-xs text-gray-400 cursor-pointer select-none">
                            Remember me for 30 days
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full mt-2 bg-amber-500 hover:bg-amber-400 text-black font-extrabold py-3 px-4 rounded-xl text-sm transition duration-200 shadow-lg shadow-amber-500/20 active:scale-[0.98] cursor-pointer"
                    >
                        Sign In
                    </button>
                </form>

                {/* Footer */}
                <div className="text-center text-xs text-gray-400 border-t border-gray-800/80 pt-4">
                    Don't have an account?{' '}
                    <a href="/register" className="font-bold text-amber-400 hover:text-amber-300 transition-colors">
                        Create one now
                    </a>
                </div>

            </div>
        </div>
    )

}

export default Login