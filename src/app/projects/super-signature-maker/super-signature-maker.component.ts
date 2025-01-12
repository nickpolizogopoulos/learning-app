import { Component } from '@angular/core';

@Component({
  selector: 'app-super-signature-maker',
  template: `
  
    <section class="container project-container">
      <section class="container-fluid">
        <div class="row mb-4">
          <section class="col niceblue">
            <h1>[Project - 02]: <u>The Super Signature Maker</u></h1>
            <p class="lead mt-4">I've been asked to make an html email signature for every colleague in the company I am working at.</p>
            <p class="lead">Once I finished the design, I had to make everyone's signature by hardcoding every single piece of 
                information again and again and again. At that point I started thinking about a dynamic way.
            </p>
            <p class="lead">This is a little different than the original implementation since I can't leak the company's information.</p>
            <p class="lead">I find this project interesting enough to be included here even though it isn't something that special in Angular. I am pretty proud of my idea, plus they liked it.</p>
            <hr class="mt-5">
          </section>
        </div>
      </section>
      <section class="container-fluid">
        <div class="row mb-4">
          <div class="col niceblue">
            <h4 class="mb-3">Use this form to make your signature</h4>
            <input type="text" class="shadow-none fw-light form-control mb-2 rounded-1" placeholder="Name" (input)="onNameUpdate($event)">
            <input type="text" class="shadow-none fw-light form-control mb-2 rounded-1" placeholder="Surname" (input)="onSurnameUpdate($event)">
            <input type="text" class="shadow-none fw-light form-control mb-2 rounded-1" placeholder="Position" (input)="onPositionUpdate($event)">
            <input type="text" class="shadow-none fw-light form-control mb-2 rounded-1" placeholder="Phone" (input)="onPhoneUpdate($event)">
            <input type="text" class="shadow-none fw-light form-control mb-2 rounded-1" placeholder="Email" (input)="onEmailUpdate($event)">
          </div>
            <div class="col align-self-center niceblue signature-card">
              <div class="col mb-5">
                  <table cellspacing="0" cellpadding="4" style="font-family: 'Montserrat', sans-serif; line-height: 1.3; background-color: white;">
                    <tbody>
                      <!-- *FIRST ROW, [LOGO] [EMPTY] [NAME] --> 
                      <tr style="background-color: white">
                        <td style="vertical-align: top;"><a routerLink="/"><img width="140" height="auto" src="../../../assets/images/learning-angular-logo.png" alt="logo"></a></td>
                        <td></td> 
                        <td>
                          <table cellspacing="0" cellpadding="2" style="color: rgb(36, 54, 99);">
                            <tbody>
                                <tr><td style="font-size: 17px;">{{name}} {{surname}}</td></tr>
                                <tr><td style="font-size: 12px;">{{title}}</td></tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <!-- *THIRD ROW, [EMPTY] [EMPTY] [INFO] -->
                      <tr style="background-color: white"> 
                        <td></td>
                        <td></td> 
                        <td>
                          <table cellspacing="0" cellpadding="2" style="font-size: 12px;">
                              <tbody>
                                <tr><td><span style="color: rgb(36, 54, 99);"><strong>Tel.: </strong></span><span style="text-decoration:none; color: black;">{{phone}}</span></td></tr>
                                <tr><td><span style="color: rgb(36, 54, 99);"><strong>Email: </strong></span><a style="text-decoration:none; color: black;" href = "mailto:{{email}}@domain.gr">{{email}}{{'@domain.gr'}}</a></td></tr>
                                <tr><td>City, Country</td></tr>
                                <tr><td>Street, Number, Postal Code</td></tr>
                              </tbody>
                          </table>
                        </td>
                      </tr>
                      <!-- *FOURTH ROW, [EMPTY] [EMPTY] [TABLE OF SOCIAL] -->
                      <tr style="background-color: white">
                        <td></td>
                        <td></td>
                        <td>
                          <table>
                              <tbody>
                                <tr>
                                  <td><a href="#" target="_blank"><img width="21" height="auto" src="../../../assets/images/super-signature-project/web-LA.png" alt="web"></a></td>
                                  <td width="7"></td> 
                                  <td><a href="https://www.linkedin.com" target="_blank"><img width="21" height="auto" src="../../../assets/images/super-signature-project/linkedin-LA.png" alt="linkedin"></a></td>
                                  <td width="7"></td>
                                  <td><a href="https://twitter.com" target="_blank"><img width="21" height="auto" src="../../../assets/images/super-signature-project/twitter-LA.png" alt="x"></a></td>
                                  <td width="7"></td>
                                  <td><a href="https://www.youtube.com" target="_blank"><img width="21" height="auto" src="../../../assets/images/super-signature-project/youtube-LA.png" alt="youtube"></a></td>
                                </tr>
                              </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
              </div>
            </div>
        </div>
        <div class="mt-5 niceblue">
          <h4>Signature Generator</h4>
          <p class="lead">The next step was to transform it into a standalone and larger project with enhanced features and customization options.</p>
          <a class="btn btn-primary rounded-1 me-3" href="https://ng-signature-generator.web.app/" target="_blank">
            Launch the project!
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right ms-2" viewBox="0 1 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
          </a>
        </div>
      </section>
    </section>
  
  `,
  styles: `
  
    .signature-card {
      margin-left: 30px;
      background-color: white;
      padding-top: 40px;
      box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.245);
      border: 1px solid rgba(178, 178, 178, 0.384);
    }
  
  `,
  styleUrl: '../projects.scss'
})
export class SuperSignatureMakerComponent {

  name: string = 'Nick';
  surname: string = 'Polizogopoulos';
  title: string = 'Jr. Front - End Web Developer';
  phone: string = '+30 6911111111';
  email: string = 'nick.p';

  onNameUpdate( event: Event ): void {
    this.name = (<HTMLInputElement>event.target).value;
  }

  onSurnameUpdate( event: Event ): void {
    this.surname = (<HTMLInputElement>event.target).value;
  }

  onPositionUpdate( event: Event ): void {
    this.title = (<HTMLInputElement>event.target).value;
  }

  onPhoneUpdate( event: Event ): void {
    this.phone = (<HTMLInputElement>event.target).value;
  }

  onEmailUpdate( event: Event ): void {
    this.email = (<HTMLInputElement>event.target).value;
  }

}