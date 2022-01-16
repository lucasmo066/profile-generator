//creates manager cards
managerCard=(manager)=>{
    return `
                <div class="cell large-11 large-offset-1">
                    <div class="card">
                        <div class="card-section text-center cardHeader">
                            <h2>${manager.Name}<br><i class="fas fa-clipboard-list"></i>${manager.getRole()}</h2>                        
                        </div>
                        <div class="card-section cardSection">
                            <p>${manager.getId()}</p>
                            <p>${manager.getEmail()}</p>
                            <p>${manager.getOfficeNumber()}</p>
                        </div>
                    </div>
                </div>
    `
}

//creates engineer cards
engineerCard=(engineer)=>{
    return `
                <div class="cell large-5">
                    <div class="card">
                        <div class="card-section text-center cardHeader">
                            <h2>${engineer.Name}<br><i class="fas fa-cogs"></i>${engineer.getRole()}</h2>                           
                        </div>
                        <div class="card-section cardSection">
                            <p>${engineer.getId()}</p>
                            <p>${engineer.getEmail()}</p>
                            <p>${engineer.getGithub()}</p>
                        </div>
                    </div>
                </div>
    `
}

//creates intern cards
internCard=(intern) => {
    return `
                <div class="cell large-5">
                    <div class="card">
                        <div class="card-section text-center cardHeader">
                            <h2>${intern.Name}<br><i class="fas fa-graduation-cap"></i>${intern.getRole()}</h2>
                            
                        </div>
                        <div class="card-section cardSection">
                            <p>${intern.getId()}</p>
                            <p>${intern.getEmail()}</p>
                            <p>${intern.getSchool()}</p>
                        </div>
                    </div>
                </div>
    `
}

//
organizeTeam = (employeeArr)=>{
    //filters into three arrays based off manager, intern, or engineer
    let managerArr = employeeArr.filter(employee=>employee.getRole() === 'Manager')
    let engineerArr = employeeArr.filter(employee=>employee.getRole()==='Engineer');
    let internArr = employeeArr.filter(employee=>employee.getRole()==='Intern');

    //joins arrs so in order of manager, engineer, intern
    const sortedArr = managerArr.concat(engineerArr, internArr)


    let teamArray = []

    //generated html based off role
    for(i=0; i<sortedArr.length; i++){
        const employee = sortedArr[i];
        const role = employee.getRole();

        if(role === "Manager"){
            const manager = managerCard(employee);

            teamArray.push(manager);
        }

        if(role === "Engineer"){
            const engineer = engineerCard(employee);

            teamArray.push(engineer);
        }

        if(role ==="Intern"){
            const intern = internCard(employee);

            teamArray.push(intern);
        }
    }

    cards = teamArray.join('')

    const generateTeam = generateHtml(cards);
    return generateTeam
}    

generateHtml =(cards)=>{
    return`
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Our Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.4/dist/css/foundation.min.css" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header>
            <h1 class="text-center"> Our Team! </h1>
        </header>    
        <div class="grid-container-fluid" id="gridContainer">
            <div class="grid-x grid-padding-x" id="team-cards">
                ${cards}
            </div>
        </div>
        
    </body>
    </html>
`
}

module.exports = organizeTeam;