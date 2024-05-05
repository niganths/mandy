export  default function Footer (){
    return (
        <footer class="  shadow dark:bg-gray-900 ">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img width="50px" height="60px" alt='Vadivel-Mandy Logo' src="/images/Logo-nb.png" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Vadivel mandy</span>
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="/products" class="hover:underline me-4 md:me-6">Products</a>
                    </li>
                   
                    <li>
                        <a href="https://www.google.com/maps/place/11%C2%B013'39.0%22N+78%C2%B010'12.6%22E/@11.22749,78.17017,15z/data=!4m4!3m3!8m2!3d11.22749!4d78.17017?hl=en-US&entry=ttu" target="_blank" class="hover:underline me-4 md:me-6">Location</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">+91 9443551703</a>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Vadivel Mandy™ | All Rights Reserved.</span>
        </div>
    </footer>
    )
}