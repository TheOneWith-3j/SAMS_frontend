import React from 'react'

const Dev = () => {
    return (
        <div className='flex'>
            <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                    <img 
                    className='w-full h-full'
                    src="data:image/jpeg;base64,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" alt="trushil dhokiya" />
                </div>
                <div className="p-6 text-center text-blue-600">
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Trushil Dhokiya
                    </h4>
                    <p className=" text-blue-600 block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                        Developer | Lead
                    </p>
                </div>
                <div classNameName="flex justify-center gap-7 p-6 pt-2">
                    <a
                        href="#facebook"
                        className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                    >
                        <i className="fab fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a
                        href="#twitter"
                        className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                    >
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a
                        href="#instagram"
                        className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                    >
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                    </a>
                </div>
            </div>

            <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                    <img 
                    className='w-full h-full'
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJYAlgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAAMEBQcCAQj/xABDEAACAQMCBAMEBgULBAMAAAABAgMABBEFIQYSMUETUWEicYGRBxQyocHRFSNCk7EWJDNDUlNig5Lw8XKC4eIIJqL/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAmEQACAgICAQQBBQAAAAAAAAAAAQIRAxIhMVEEEyJBMmFxgcHw/9oADAMBAAIRAxEAPwDn6OZBy+DHFi3WPmR/eMkY69R1o1ntBLGzAZLUPcB6elhcRwJJJIvtFeftlelHLxLucVxJbI6pOmAxtptNlPggEsoyWGx7VeakP/qrnH2SD83/APNSb+3UyhnXGF6nvXOpIDw3cL2Cg/Jga4/VR1gv3KY3cjB4dEl1S91gWxzNbTZVD0YMW29+1UM8TxzMJUKFDhg2xBFahwJAr8ScRKR+1E33v+dEercO6TfS+NdWUDyYx4jIMn416CyUc8o8gNpRyqgdaI4QTHn0ooj0XTkQrFaRR9NwgoU+k7WH0azttP0qAR3V6WPixj2kVSNgMdTn7qmls6H24GLoHlJx0quuWxousjI3tW/GoNvwFxDPpX6Qa7FvKntJbl2MmB0JI2BNG/DOotqvBz3N5Cq3CxvFOMYyynGT79vjTR1Uk0zT2rlGTaE+b4FWGduho2sGHjS/9fSiPTBD4uUVcbdKvIEV52VQOZj3wPvNP6ie2V0TxKolBLfSzQxRM/sx/Z9kDFPa3fkabKIBvy7ALk+VFp02ZYPGPhcmMnfFQWAdeWRQwPUHoalTi7ZS7VGbW2o3GkaI2o6dAqXEE3KJJFZgQxGCQT/ibHbcGolu00XDcc13BKuWYW6mIkR+02SARsOmMD0o8JuLO6YhFe3bC5JHsrtnY+7oNzt5U3bRPfXivfyry9UiRw3Q9c9h6HerOcauiWrsbuGv4+AeUeLHdGElTF7DIWYkYIxjqPdWcWbamdRuZ7m2uppZYyTJJ7R5ug5mb8+3y2LiBuXRLkqoJ5Nhy5HUdqEbe6nkNvBGqMwbLMpPKwHT39xn/YbHNxTS+wTj5A97Se9vLi4mAjJYZ8TCn0228qVTbyNI76Ry3iK/tKd+m2/rn8KVJPNkb5Zo41Qd6U8i3cYhzz42x7jRHFqV0sbF0U46k7ULaDceHq9mSMr4qqT23FGmuBf0eki7tzHf51BL42i838kgdveI0eTwsIJVJGOff+FW80gm4duiCCfDbOKAb/SZNRluZi4UxsrJtnmGPu3FE/DZkPC18JQwYK+Q3X7Ncnqb9uysEtuAE0e+kteJdYWB2DOF5guOg6fxq0u7+7KhhdyBfh+VUGm4HFupjozRIT91XNxGxhWVWXkZiNuxG9dlfFV4Oab+QRJcTm7tUFxIFdWzk+W9McR6X9daxvFYtcWrkKRv7DDB274PKevY1XX80iR2zp7LCNj7uldW15dsVUMflSK+0Vj2mT41vJ4IF1zURZyQSkyRxcrGSMjYkDbp5j3b11r19pulWmoWsbchuFZ0XlJyxUHPxwflTcOq/Vbt5Vt+e4uF9rHV8DAznt0qu17woNHGsaxbCctcJGVBIC5B2HngD76SDblVHbJRlG26RX2GofUmll5XKJyeLzADGTgEb9PPqaOuENTgv9SungWOZYIoyCxOeZupxjpscfnWbHU9GniR4pIhP+0JDIM9wSScZB6Y6d89KIfo3e1n1maeWUciW+CU9W7geWO/nXTCLtOSK58WB45e39dGym7IwCidNwT8Kz/izw4dTMcCmMIVyAxIOVB28utG0NsJo5pGPOlxho+/s4yKz/ixymvSxsclPCB/drVc/wCJ5GPsFL55GR1WTD8p5C7bc2DjIOx389q6VE08aTM3LETbO8xUcoyJHGT8qrtcY/Vxh2TLqOZeopmeV9Ts7OyL7rZiNm5uYEl2Ox7jfrUUvgO/zCca3Ya7pF3BZ3Z8VDGvL4ZBYFh2bGc9Pj51UPpumi68aR/rSuFQIGARBvzYbOR5Z6DFRUtls9NuXa9trjVJRFEYI2Cciqwzkjcn1+6m7LS9Y1ku2k273N2kj80kkiII98HdiAfgD329oY68UY9HLktskyJbT5iaNYZYTyqpZlYpkjcOWG2Ox7+uyq9m4S1i2bxrnToS77GYXcY7DC5LAn4+XfJNKuefZeC+JzCQl7C+AMTJnb/FR/xAVXQ1y/K3PsM4J3/81njf0iesg3+Ofxo14+Yw6bDIjcvI7jYA/wBn8qjBfCRSf5IqtOiUqpVvEMikuP7GM47D086ttMtnksr2CJRzSRjHYFipqNpMMM2mxSTFXQh0kVxlR7WRkVK02VrR3ESCdCpdFKbhT+yp9+/xxXH6jNCVYy+PG9XMo+CODbgcUahqt88C2ygQhCA5kIA7dht33o/1nR7TULGS3E6ROwHK3KGG3QEeW1V/DYQXWq+EhV2mikdAMBGaIZxsOoUH41f+2JCnKN2HL6g969XDFaI48svkzINasZYZktWKSSoHU+Ecjbl6ULapxPDpQeG0HjXaZB9rCxn18/cPnRvqcMg4o1ZpJGaJJCQmcYyBtn1JrGOILcWevahbAgrHcyBcHIxzGhDEm7YXOlSNL+iMNxRFqEGovzz2cyXEM/RsyAqwIG3L+rXbt8BV79OMK2HDWl29vhUGoZVcA/sOd89d/Os5+ijiD9AcX2plfktLz+bz7ef2D8Gx8Ca0T/5AzAaRpGftG7ZuX3RnP8afRKWwN3rqYnK7Es3fO+2Kn8Lax+iNZt7uQkwBsTRjOHXyPxx8qrGJwN6ZQ+0ffVHyBSado+oeEuPtP4mnmtbKF45oVDMrvnbOOoHuqu4z0aaS4n1SFlCFed0YknKr228lFA/0BLHJr+plm9oWq7eY59/wrW+KIg2hXBIwRbSH3nlx+NQyJtUG1GXBiWowvLaF0KKcqAXxgbjPyGah+FLpk8Et3k4gBMgGSxyc7eee1EcFtLNZytatm5jnhdABnAD5J327D59utD+vaPcXcUcdhA7W0LTMHCk+ysjAZxnOMDp/xPEto0NJ/IHeFLFrq/Mbxs8LxvzEsV3xsSQR3wfzr6P4V0my0vTopIY3eadA8s0wAc5HkNgPQfhXzq8F1p+oyxO3LKiZZQ3cDI7eVfR2g27y8P2A5sGS0i5cbY9kGuidojRdACWNeaJGHUBqVdxRn7e+6gY8qVDkazLuFeHl1uWYTi4WKPGHjAwTjpk0W8bWAk0vmlV8B+bI7bV3wVdTLoMCycqkMUAVAP2m8vdV8ee5jaORzysMMpQd/eKjFR0ryUm3tZmOlXmnwvBDqE3hCKUPCTjDHnBOc+QBNHFuto7xPDIpjEfstsCSf+Kq5uBNMM0knPI7YYIrAEA79R37D76h8KQQu1nz20TAwTl0MSnPLKVB9/SuVwbmoyRZzWqoIdMjjs9Sv5iy+DcLEQAR7LqGU537gL99WT39mGXxJowcf3q/nVJqvDGl6n4zT2wDPD4KMg5fC67jHfJ+731QXX0ScNy3FvLbm7t2jkWRiJy5kwOntZxnbcV6EHSo5ny+Sg4y1DUrLiK7msZYzFIVlV48McYGcnBA+yR7t6xrUpzPqM87dZZWc48ySa1nXom0CfiCx5xIix/q2kQt7BUMQzZGNub4/I464MrgA5YnA99DG27K+ow+21XTHCM55d/f3ov4x4qHEvD/AA5HLKXvrNJ47oHOc5j5WPvC/PNC18iw31xEY8IkrAYP2Rk4rlccpHXJBU5qhE8O9d29jcXEd5cW8bOtsgkl5RnlUnGfgSPnSxtRp9F93DHqF/p09r9Yj1K3Fu+5BVCSGP8A+hWbpWaih4L4jn4X1231S3LFU9meMYPiRn7Q379x6ivojXdSurrS8QWcs1rdxFVuICjCJGUHmYZzjfsD618y6hp0ml6jdWE+HktpTGxHRsdxX0d9Hc0cnBmjqvMSlnHk+oHSknygx5M7lvHsGnk8IyKGwUOwwO+3cb4oU4j1a+jndYLsGHBEkUQPhqrKuMjGwJJO/ei/i9be31Se0tyRG83hx5OPaI+z89q6SxuhYJAjsW8Exlihxz5b07DlHw9KhCWiOzD6aXqG0vr7/oz7R4r7W9UdUuCZ2Uu8pXmbAwCcd9q+iOGOKbG70yODSFuL5LRVgZ1gEW6jHR2Hl5ms2+izg61i1jXDrTBzY2qKFQkDEnNknvkeGMep91bHZ6VY2UbixtYbfLcz+HGF5mxjJA711Sd9HHKOvD7HItUbwxm0nTyBMefuc0qi3iASnAAHXpXlJsxLIPBZH1EowH6tyw9DRCzMiycuOYjb34rHdE49udKgaJ44LvJJD8/JjPuFTZPpNnkG1lAD6XH/AK1GNKNFnFt2FkkssfD+j6pO7c8E4mkZyQcPzDf/AFgU1Y+Dz6e8coEf1acFlJH7UfceuaD9V+kx73SZtNk0i3EM0Ri2uSOUEdhjtQVpWsXWl23gCeSWIHIQyYXPu3qcsfz3TH5qjdbdbmTiFD4rNaQWfQdDIzjBx1zyr9/rUPgqTU7x+IX1ObmYaq6wb5VI1ChQPTYVla8f3iRchtVbzJl3+OFqw0/6U9SsbAWsNhbOedmLu7EnLE7+7OPhXRCXAjiw14i0QXeu6hLbzK08qQ8sanJZixXG+2cV86vayQ34gmPgSpJyMW38NgcHPuIo/ueM7qW8kvPqNvDO8yzCSIFWRwOXY+q7fHNAepTNc3M9xJnnklZ237kkmnjV8D5pylGKk+j2+mae9nlP9ZIzbDzNMxDmflPcbClnNcSkrhl+0DtTEB3OB5+lXHCV++mcSabeqzQhJ1DN35W9lvhgmoKBJUWRBufurhwe9YNFhxh4X8qtYaF1eL62/KynIO9fRHBdq9twzpsHhleW2jwP+0V86W/Dt62j/pIKjwYyVU+0ATjOPL+FE1t9I3FVvbJAmpRMiryrzwISo7DIA7VNuL6HUWuzUOM7TR4TDLeXSQvcSj9SUyZDnHNgDIA7np8asLfhxSCZUQ+1NluZmJ3fGcHYdOlYXd8ValdzLPdx2U0qqqmSWNnZgPPL05/K7VAqpFHawgE7R+KBv6c+3WsqT6LYsjimtq/37mvaLb29l9KWs2xUrBc2caorKxV2BLEZxjbf3UYzxNFqQu+dFge3McinuwYFMf6n+dfOcHGut2moyX1qbdJG6Aq7BNsbAtsfWn776R+K76Hwbi9g5OuBbL+NVc0yE03K7N6u7iDxSTOmCB1YeVKvnd+LddlA57qM46Yt0H4UqixfbOo0PKuNs9q6NPIvQeu9eOoFRZ0EZ84ph85qU4phxRRhhhXkYw3wNOldqsbfhvWbiOOaDS7uSKVeZHWI4YEdRRtGKx9xTmj6BFrF5cC4uDEqIGCqMmQnbr2A2+dKaGSGV4pkZJEJVkbqpHY13Y3UtheJcwkhlyDg45geooW6epkla2B+7tpLO5ltpgQ0TFTn+Px61CnbOB261dcT3TX08V1KGEpHK2TkemPvqhauiDbjbOfIkpNIftJzE3flPl2qW9wrjADH16VAjAIqTGoyNh1pmBML7vWc6FHYxuInMMToICR1LcyMQdtsf7NURTyrpExToXNcySXR0yk5dkVkrwLUpkrzkprFoY5SaSpufcKlRxFnVVGWY4A9avxwPxKshDaQ+y5P84h9f8XoflQc4rth1vkGlSlT6AEZHelRsJdEjJO32j29a5fBzXJ6n3n+NI1Mwy43pthT5GTXDLWMMYon0/jfWdPtbeyt0sTBDEIlEkBJKgbZPN76HuWly+2nv/ChKKlw0Y7v7iW+vJ7ufl8SdzI/KMDJ64FRGWpJWm3XajVGKzUU57Z8dt6oHoplTmUg9xihZ8jrV8b4IZFydxfZqZajM0eP7VQ02FT9KjaS4DY9hOpppdCx7LZErsJTqpgV7jeuY6khgrSC08VxS5c0bNRynMjq6nDKQQfWrs8Y8SvI4bV5PbA5v1EO+5/wepqo5dq5A/Wn3D8aDSfaD0cBABgUqeApUQUOi/suQd288PvTbXtt2D/BG/Kinhmw0bUIb19a1U2AgkVUy6jnBXJO/Xfbao2pvwxbCRNMvtS1C4C5SOGHIz6nlAx7qPAoN/XoMnZ/3b/lS+u22N1f93J+VXFnYX15c5ktv0fZ9Q1y/PKw/wClcY+P31bXFlocIAF3clu/T8qDlGPZlyCX121I2R/hFJXIvLcHJExx0HgyflRPM2iQMB490dvJfypkS6QTmSS6A88D8qCnFjasHWvYe0cw/wAuSmnvYz0Sb4xvRMx0XoJrj7vypt/0L/buT8QPwrbRBX6glNdAg8qSf6GqlfeQn1rQXh4bdGa5lu0RcZPMPyoI1A2r3kraekiW2cRiVstjzNWxtNEciIyjJG2aubGSO3iVfDkJO5PhnrS4et9NeSaTVZJkSNRyLEN2Y+vbG3zq2thYPqCj9aLLJAyw5scpxvjzrTkug44/Yyt5CP6qU/5bV79ch/uJf3TVfiDRMf0twPiPypz6vouNpbg/L8qjtEtz5Bo3MXaOUf5bUhdRY/o5T/lmiArpIXZrg/8Acv5V3FBpDjHiXIPb2h+VbZG/kHfr0OMGKT9235V59ch6iKT90+9X11baZEAY5pic4IP/ABUGU26n2GkI+X4UVJM38lf9dg/uJf3clKpytaEkOZVPlt+VeVtohphPw3o1zBe3y6lppDssTRCZASPtBsZ7H2flVpfWd6IzDbR+FGdsIoXPyrS/0enil2kd3IxzMB0/2a9k06MHOW+QqTxzlywboyo6Hfy/bBPqK5bhG6k3Ys1ambBezNnzwK7S3Udecj0FMofTA5mRz8E3bD2Mj3VEPA1+Dvk1ti2aMMq33V7+jwern5CnWJr7BuYg/AF6d1YrXH8hdRC9HbHcCtz+oIO7fdXj2qhcgnI6UfbfkG68Hz7xXwx+iOHWnnlke5kCyCMbCJPECgt5536Yx652z47dSfnWsceaxLq1/rP1Tle0gjitubI+yGwW37c7EdD+z51Tjh7QoOBJrq4AfVZIlkibxGDRtzZVQOhBVgDt+ycdQRWDSVE5q3YI6JBPeSGCPlKj2iMjPwoq03hTVrp0EdnMLVmP85GOUYH5jFQvo70FtV4ps8uixW0wkkJP2gATgDvnl/jW/wBjZQWKhLZSkYJIjyCoJOT2z1J71PLtfA+N0uTI14J1HzP8Kd/kXfkYLFQe/XFbCIw+4PwxXhi8xUtJeR914MiHA95jqT767j4Jvl/rK1tUA7fdTsaK/v8AcKbXywbGRPwVet+1/CuTwRe4Ht4x3xWwmH0+6vRbdmx/poqBtl4MWm4H1Jn5i+duuKVbStsuMDGR12pUdH5Nv+hJrw0qVMIdKjPuG2pwQINz7R9aVKmSQrY4BtXuKVKmAeEVFvXKRkivKVBhR85RaXcfyit7GG6dHlkMHjKxRuQkhtx0yM7USfSRMbPX7S3hhhMUcXilHXIdmyN/cBtjuc0qVIuaKtE/6KtOW71O/wBWmSFWiVYI0hTkUZyW2G3Zd+vX46h4QA2pUqzFYl2IqQIQPaO4PalSrAPVRewxXaR53pUqKSMOhAP99aWK9pUwDlRgV7SpVjH/2Q==" alt="hitanshu gandhi" />
                </div>
                <div className="p-6 text-center text-blue-600">
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Hitanshu Gandhi
                    </h4>
                    <p className=" text-blue-600 block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                        Developer | Tech
                    </p>
                </div>
                <div classNameName="flex justify-center gap-7 p-6 pt-2">
                    <a
                        href="#facebook"
                        className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                    >
                        <i className="fab fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a
                        href="#twitter"
                        className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                    >
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a
                        href="#instagram"
                        className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                    >
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Dev