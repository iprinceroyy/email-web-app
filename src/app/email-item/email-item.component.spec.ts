import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailItemComponent } from './email-item.component';

describe('EmailItemComponent', () => {
  let component: EmailItemComponent;
  let fixture: ComponentFixture<EmailItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
