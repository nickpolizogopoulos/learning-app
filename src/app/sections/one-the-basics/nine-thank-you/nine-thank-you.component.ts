import { Component } from '@angular/core';
import { lessonHostClasses } from 'src/app/shared/host-classes';

@Component({
  selector: 'app-nine-thank-you',
  template: `
  
        <h4>Thank you!</h4>
        <p class="lead">I hope you find this project helpful.</p>
        <hr>
        <p>This is my
            <a class="inherit" href="https://github.com/nickpolizogopoulos" target="_blank">GitHub!</a>
        </p>
        <table>
            <tr>
                <td class="align-bottom">
                    <img width="110px" src="../../assets/images/learners-dog.png" alt="A lovely white dog">
                </td>
                <td class="align-bottom">
                    <img width="150px" src="../../assets/images/learner.png" alt="A yound learner">
                </td>
            </tr>
        </table> 
  
  `,
  styles: [``],
  host: lessonHostClasses
})
export class NineThankYouComponent {

}
