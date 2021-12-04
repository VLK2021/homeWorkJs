// - Є масив :

    let usersList = [
        {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            address: {
                street: 'Kulas Light',
                suite: 'Apt. 556',
                city: 'Gwenborough',
                zipcode: '92998-3874',
                geo: {
                    lat: '-37.3159',
                    lng: '81.1496'
                }
            },
            phone: '1-770-736-8031 x56442',
            website: 'hildegard.org',
            company: {
                name: 'Romaguera-Crona',
                catchPhrase: 'Multi-layered client-server neural-net',
                bs: 'harness real-time e-markets'
            }
        },
        {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            address: {
                street: 'Victor Plains',
                suite: 'Suite 879',
                city: 'Wisokyburgh',
                zipcode: '90566-7771',
                geo: {
                    lat: '-43.9509',
                    lng: '-34.4618'
                }
            },
            phone: '010-692-6593 x09125',
            website: 'anastasia.net',
            company: {
                name: 'Deckow-Crist',
                catchPhrase: 'Proactive didactic contingency',
                bs: 'synergize scalable supply-chains'
            }
        },
        {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            address: {
                street: 'Douglas Extension',
                suite: 'Suite 847',
                city: 'McKenziehaven',
                zipcode: '59590-4157',
                geo: {
                    lat: '-68.6102',
                    lng: '-47.0653'
                }
            },
            phone: '1-463-123-4447',
            website: 'ramiro.info',
            company: {
                name: 'Romaguera-Jacobson',
                catchPhrase: 'Face to face bifurcated interface',
                bs: 'e-enable strategic applications'
            }
        },
        {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            address: {
                street: 'Hoeger Mall',
                suite: 'Apt. 692',
                city: 'South Elvis',
                zipcode: '53919-4257',
                geo: {
                    lat: '29.4572',
                    lng: '-164.2990'
                }
            },
            phone: '493-170-9623 x156',
            website: 'kale.biz',
            company: {
                name: 'Robel-Corkery',
                catchPhrase: 'Multi-tiered zero tolerance productivity',
                bs: 'transition cutting-edge web services'
            }
        },
        {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            address: {
                street: 'Skiles Walks',
                suite: 'Suite 351',
                city: 'Roscoeview',
                zipcode: '33263',
                geo: {
                    lat: '-31.8129',
                    lng: '62.5342'
                }
            },
            phone: '(254)954-1289',
            website: 'demarco.info',
            company: {
                name: 'Keebler LLC',
                catchPhrase: 'User-centric fault-tolerant solution',
                bs: 'revolutionize end-to-end systems'
            }
        },
        {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            address: {
                street: 'Norberto Crossing',
                suite: 'Apt. 950',
                city: 'South Christy',
                zipcode: '23505-1337',
                geo: {
                    lat: '-71.4197',
                    lng: '71.7478'
                }
            },
            phone: '1-477-935-8478 x6430',
            website: 'ola.org',
            company: {
                name: 'Considine-Lockman',
                catchPhrase: 'Synchronised bottom-line interface',
                bs: 'e-enable innovative applications'
            }
        },
        {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            address: {
                street: 'Rex Trail',
                suite: 'Suite 280',
                city: 'Howemouth',
                zipcode: '58804-1099',
                geo: {
                    lat: '24.8918',
                    lng: '21.8984'
                }
            },
            phone: '210.067.6132',
            website: 'elvis.io',
            company: {
                name: 'Johns Group',
                catchPhrase: 'Configurable multimedia task-force',
                bs: 'generate enterprise e-tailers'
            }
        },
        {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            address: {
                street: 'Ellsworth Summit',
                suite: 'Suite 729',
                city: 'Aliyaview',
                zipcode: '45169',
                geo: {
                    lat: '-14.3990',
                    lng: '-120.7677'
                }
            },
            phone: '586.493.6943 x140',
            website: 'jacynthe.com',
            company: {
                name: 'Abernathy Group',
                catchPhrase: 'Implemented secondary concept',
                bs: 'e-enable extensible e-tailers'
            }
        },
        {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            address: {
                street: 'Dayna Park',
                suite: 'Suite 449',
                city: 'Bartholomebury',
                zipcode: '76495-3109',
                geo: {
                    lat: '24.6463',
                    lng: '-168.8889'
                }
            },
            phone: '(775)976-6794 x41206',
            website: 'conrad.com',
            company: {
                name: 'Yost and Sons',
                catchPhrase: 'Switchable contextually-based project',
                bs: 'aggregate real-time technologies'
            }
        },
        {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            address: {
                street: 'Kattie Turnpike',
                suite: 'Suite 198',
                city: 'Lebsackbury',
                zipcode: '31428-2261',
                geo: {
                    lat: '-38.2386',
                    lng: '57.2232'
                }
            },
            phone: '024-648-3804',
            website: 'ambrose.net',
            company: {
                name: 'Hoeger LLC',
                catchPhrase: 'Centralized empowering task-force',
                bs: 'target end-to-end models'
            }
        }
    ];

// Створити під кожен елемент окремий блок. В цьому блоці, під кожну властивість,
// та властивості внутрішніх об'єктів створити свої окремі блок.


//====================Переробка не дороблена===================================================//

// for (const element of usersList) {
//     let div = document.createElement('div');
//     div.style.marginBottom = '20px';
//
//     for (const elementKey in element) {
//
//         let div_element = document.createElement('div');
//         div_element.innerHTML = element[elementKey];
//         div.appendChild(div_element);
//
//         if (typeof elementKey === "object"){
//
//         }
//
//
//     }
//
//     document.body.appendChild(div);
//}

// for (const element of usersList) {
//
//     let div = document.createElement('div');
//     div.style.marginBottom = '20px';
//
//         for (const elementKey in element) {
//
//             if (typeof element[elementKey] === "object") {
//                 let div_addres = document.createElement('div');
//                 div.appendChild(div_addres);
//
//                 for (const elementKeyKey in element[elementKey]) {
//
//                     if (typeof element[elementKey][elementKeyKey] === "object") {
//
//                     let div_element = document.createElement('div');
//                     div_element.innerHTML = element[elementKey][elementKeyKey];
//                     div_addres.appendChild(div_element);
//                     } else {
//                         let div_geo = document.createElement('div');
//                         div_geo.innerHTML =
//                     }
//
//                 }
//
//             } else {
//                 let div_val = document.createElement('div');
//                 div_val.innerHTML = element[elementKey];
//                 div.appendChild(div_val);
//             }
//
//         }
//     document.body.appendChild(div);
// }


// let div_geo = document.createElement('div');
// div_element.appendChild(div_geo);



//.==============================================================//

// for (const elementUserList of usersList) {
//     let div = document.createElement('div');
//     div.style.marginBottom = '30px';
//
//     let div_id = document.createElement('div');
//     div_id.innerHTML = elementUserList.id;
//     div_id.style.fontWeight = '900';
//     div_id.style.fontSize = '30px';
//     div.appendChild(div_id);
//
//     let div_name = document.createElement('div');
//     div_name.innerHTML = elementUserList.name;
//     div.appendChild(div_name);
//
//     let div_username = document.createElement('div');
//     div_username.innerHTML = elementUserList.username;
//     div.appendChild(div_username);
//
//     let div_email = document.createElement('div');
//     div_email.innerHTML = elementUserList.email;
//     div.appendChild(div_email);
//
// //------------------------address-----------------------------------------------//
//     let div_address = document.createElement('div');
//     div_address.classList = 'address';
//     div_address.style.marginBottom = '15px';
//     div_address.style.marginTop = '15px';
//     div.appendChild(div_address);
//
//     let div_address_street = document.createElement('div');
//     div_address_street.innerHTML = elementUserList.address.street;
//     div_address.appendChild(div_address_street);
//
//     let div_address_suite = document.createElement('div');
//     div_address_suite.innerHTML = elementUserList.address.suite;
//     div_address.appendChild(div_address_suite);
//
//     let div_address_city = document.createElement('div');
//     div_address_city.innerHTML = elementUserList.address.city;
//     div_address.appendChild(div_address_city);
//
//     let div_address_zipcode = document.createElement('div');
//     div_address_zipcode.innerHTML = elementUserList.address.zipcode;
//     div_address.appendChild(div_address_zipcode);
//
// //----------------------geo--------------------------------------//
//
//     let div_geo = document.createElement('div');
//     div_geo.classList = 'geo';
//     div_geo.style.marginBottom = '5px';
//     div_geo.style.marginTop = '5px';
//     div_address.appendChild(div_geo);
//
//     let div_address_geo_lat = document.createElement('div');
//     div_address_geo_lat.innerHTML = elementUserList.address.geo.lat;
//     div_geo.appendChild(div_address_geo_lat);
//
//     let div_address_geo_lng = document.createElement('div');
//     div_address_geo_lng.innerHTML = elementUserList.address.geo.lng;
//     div_geo.appendChild(div_address_geo_lng);
// //------------------------------------------------------------------------//
//
//     let div_phone = document.createElement('div');
//     div_phone.innerHTML = elementUserList.phone;
//     div.appendChild(div_phone);
//
//     let div_website = document.createElement('div');
//     div_website.innerHTML = elementUserList.website;
//     div.appendChild(div_website);
//
// //---------------------company-------------------------------------------//
//
//     let div_company = document.createElement('div');
//     div_company.classList = 'company';
//     div_company.style.marginBottom = '15px';
//     div_company.style.marginTop = '15px';
//     div.appendChild(div_company);
//
//     let div_company_name = document.createElement('div');
//     div_company_name.innerHTML = elementUserList.company.name;
//     div_company.appendChild(div_company_name);
//
//     let div_company_catchPhrase = document.createElement('div');
//     div_company_catchPhrase.innerHTML = elementUserList.company.catchPhrase;
//     div_company.appendChild(div_company_catchPhrase);
//
//     let div_company_bs = document.createElement('div');
//     div_company_bs.innerHTML = elementUserList.company.bs;
//     div_company.appendChild(div_company_bs);
//
// document.body.appendChild(div);
// }








