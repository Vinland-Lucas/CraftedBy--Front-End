<script>

</script>

<template>
    <main>
        <div id="login" class="main--container w-screen h-screen bg-timberwolf text-black flex justify-center items-center">
            <div class="w-5/6 h-fit px-5 py-7 font-dm-sans-extralight border border-black rounded-[10px]">
                <h1 class="font-ryman-eco text-5xl pb-10">Login</h1>

                <div id="loginbox">
                    <form action="" method="POST">
                        <div>
                            <label for="email" class="">E-mail</label><br>
                            <input type="email" id="email" placeholder="Please type your mail here" class="mt-2 mb-5 px-3 text-black input input-bordered w-full max-w-xs h-10 bg-transparent border-black rounded-[5px] focus:border-black focus:outline-none focus:text-black">
                        </div>

                        <div>
                            <label for="password">Password</label><br>
                            <input type="password" id="password" placeholder="Please type your password here" class="mt-2 mb-10 px-3 text-black input input-bordered w-full max-w-xs h-10 bg-transparent border-black rounded-[5px] focus:border-black focus:outline-none focus:text-black">
                        </div>

                        <div class="text-center pb-8">
                            <input type="submit" value="CONNECT" class="font-ryman-eco btn btn-active px-8 rounded-none font-normal text-xl text-white bg-black">
                        </div>
                    </form>

                    <p class="text-center text-slate-600 pb-6">or do it via other accounts</p>

                    <div class="flex justify-center gap-8 pb-8">
                        <div class="w-[3.25rem] h-[3.25rem] bg-white rounded-full flex justify-center items-center">
                            <i-ph-google-logo style="font-size: 1.625rem;"></i-ph-google-logo>
                        </div>
                        
                        <div class="w-[3.25rem] h-[3.25rem] bg-white rounded-full flex justify-center items-center">
                            <i-ph-apple-logo style="font-size: 1.625rem;"></i-ph-apple-logo>
                        </div>

                        <div class="w-[3.25rem] h-[3.25rem] bg-white rounded-full flex justify-center items-center">
                            <i-ph-meta-logo style="font-size: 1.625rem;"></i-ph-meta-logo>
                        </div>
                    </div>

                    <p class="text-center text-slate-600">
                        Don't have an account ?
                        <span class="text-black underline">
                            <RouterLink to="/">Sign Up</RouterLink>
                        </span>
                    </p>
                </div>

            </div>
        </div>
    </main>
</template>