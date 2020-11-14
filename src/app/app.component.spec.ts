import { RouterTestingModule } from '@angular/router/testing' 
import { ComponentFixture, waitForAsync } from '@angular/core/testing'

import { AppComponent } from './app.component'
import { ConfigureFn, configureTests } from './../../jest/config.helpers'

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>
  let component: AppComponent

  beforeEach(waitForAsync(() => {
    const configure: ConfigureFn = testBed => {
      testBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [AppComponent]
      })
    }

    configureTests(configure).then(testBed => {
      fixture = testBed.createComponent(AppComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
    })
  }))

  it('should create the base app component', waitForAsync(() => {
    const app = component
    expect(app).toBeTruthy()
  }))
})