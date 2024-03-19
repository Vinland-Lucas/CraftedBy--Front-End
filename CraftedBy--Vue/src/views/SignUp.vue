<script>

</script>

<template>
    <main>
        <div id="signup" class="main--container w-screen h-max bg-timberwolf text-black flex justify-center items-center">
            <div class="w-5/6 h-fit my-5 px-5 py-7 font-dm-sans-extralight border border-black rounded-[10px]">
                <h1 class="font-ryman-eco text-5xl pb-10">Sign Up</h1>

                <div id="signupbox">
                    <p class="text-center text-slate-600 pb-6">do it via other accounts</p>

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

                    <form action="" method="POST">
                        <div>
                            <label for="lastname" class="">Lastname</label><br>
                            <input type="text" id="lastname" placeholder="Please type your lastname mail here" class="mt-2 mb-5 px-3 text-black input input-bordered w-full max-w-xs h-10 bg-transparent border-black rounded-[5px] focus:border-black focus:outline-none focus:text-black">
                        </div>

                        <div>
                            <label for="firstname" class="">Firstname</label><br>
                            <input type="text" id="firstname" placeholder="Please type your firstname mail here" class="mt-2 mb-5 px-3 text-black input input-bordered w-full max-w-xs h-10 bg-transparent border-black rounded-[5px] focus:border-black focus:outline-none focus:text-black">
                        </div>

                        <div>
                            <label for="birthday" class="">Birthdate</label><br>
                            <input type="date" id="birthday" placeholder="Please type your firstname mail here" class="mt-2 mb-5 px-3 text-black input input-bordered w-full max-w-xs h-10 bg-transparent border-black rounded-[5px] focus:border-black focus:outline-none focus:text-black">
                        </div>

                        <div>
                            <label for="email" class="">E-mail</label><br>
                            <input type="email" id="email" placeholder="Please type your mail here" class="mt-2 mb-5 px-3 text-black input input-bordered w-full max-w-xs h-10 bg-transparent border-black rounded-[5px] focus:border-black focus:outline-none focus:text-black">
                        </div>

                        <div>
                            <label for="password">Password</label><br>
                            <input type="password" id="password" placeholder="Please type your password here" class="mt-2 mb-10 px-3 text-black input input-bordered w-full max-w-xs h-10 bg-transparent border-black rounded-[5px] focus:border-black focus:outline-none focus:text-black">
                        </div>

                        <div class="text-center">
                            <input type="submit" value="SIGN UP" class="font-ryman-eco btn btn-active px-8 rounded-none font-normal text-xl text-white bg-black">
                        </div>
                    </form>
                </div>

            </div>

        </div>
    </main>
</template>