import { TestBed } from '@angular/core/testing';
import { provideRoutes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('App', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports : [ RouterTestingModule ],
			declarations : [ AppComponent ],
			providers : [ provideRoutes ]
		});
	});

	it("should have a title", () => {
		let fixure = TestBed.createComponent(AppComponent);
		fixure.detectChanges();
		expect(fixure.debugElement.componentInstance.title).toEqual('Welcome to Grocery App');
	});
	
})
