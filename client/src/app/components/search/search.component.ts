import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  screen_name: any;
  tweets: any;

  constructor(
    private searchService: SearchService,
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSearch() {
    const params = { screen_name: this.screen_name };

    // Required Fields
    if(!this.validateService.validateSearch(params)) {
      this.flashMessage.show('Please fill in a field.', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // Check type
    if(!this.validateService.validateType(params.screen_name)) {
      this.flashMessage.show('It\'s an inappropriate format. You must use only letters, numbers, and "_" symbol.', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    this.searchService.getTweets(params).subscribe(data => {
      // If user doesn't exist
      if (!data.success) {
        this.flashMessage.show( data.message, { cssClass: 'alert-danger', timeout: 3000 });
        return false;
      } else {
        this.tweets = data.data;
      }
    });
  }

}
