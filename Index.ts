import "reflect-metadata";
import {AppContainer} from "./ioc/Container";
import * as config from "config"
import {Integration} from "./entities/Record";
import {JazzImporter} from "./importers/JazzImporter";
import {IcimsImporter} from "./importers/IcimsImporter";



(async () => {

  try {
    await AppContainer.instance.init();

    //TODO: take user inputs via Q/A on interactive console
    // TODO: remove hardcoding for integrationInput
    //let integrationInput: string = "Jazz";
    var ans:String;

    var readline = require('readline');
    do {


      var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      rl.question('Enter the integeration you want to run', (integrationInput) => {

        if (integrationInput) {
          switch (integrationInput) {
            case Integration[Integration.Jazz]:
              new JazzImporter().run();
              break;
            case Integration[Integeration.Icims]:
              new IcimsImporter().run();
              break;
            case Integeration[Integeration.Taleo]:
              new TaleoImporter().run();
              break;
            case Integeration[Integeration.Jazz2]:
              new Jazz2Importer().run();
              break;
            default:
              console.log("incorrect integeration");
          }
        }
      })// end of rl.question block
      rl.question('Do you want to continue if yes then select Y otherwise N ?' ,(ans)=>
      {
      })
    }while(ans==="Y" )
  }  // end of try block
  catch (e) {
    console.log(`Error in Index.ts. Error Message: ${e.message} | Error Stack: ${e.stack}`);
  }
})();
