



let usersJs = document.querySelector("#usersJs")

fetch("https://jsonplaceholder.typicode.com/users")

    .then(res => {
        if(res.status === 200){
            return res.json()
        }
        return error = new Error ("Error:)")
    })
    .then(data => {
        data.forEach((user) => {
            usersJs.insertAdjacentHTML("afterend", `
            <tr>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                   ${user.name}
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    230 لیتر - پرت و نایف
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    ۱۴۰۰/۰۷/۱۲
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    ۱۴۰۰/۰۷/۱۰
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span class="relative inline-block px-3 py-1 text-green-900 leading-tight">
                    <span aria-hidden="true"
                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                    </span>
                    <span class="relative">
                        ندارد
                    </span>
                </span>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                            viewBox="0 0 24 24" width="24px" fill="#F9A602">
                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                            <path
                                d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z">
                            </path>
                        </svg>
                    </a>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                            viewBox="0 0 24 24" width="24px" fill="#FF0000">
                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                            <path
                                d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z">
                            </path>
                        </svg>
                    </a>
                </div>
            </td>
        </tr>
            `)
        });

    })
    
    
