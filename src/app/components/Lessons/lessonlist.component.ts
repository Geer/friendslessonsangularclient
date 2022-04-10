import { Component, OnInit } from '@angular/core';
import Lesson from 'src/app/model/Lesson';
import { LessonService } from 'src/app/services/Lesson.Service';
import { ActivatedRoute, Router } from '@angular/router';
 

@Component({
  selector: 'lessons-list',
  templateUrl: './lessonlist.component.html',
  styleUrls: ['./lessonlist.component.css']
})

export class LessonListComponent implements OnInit {

    lessons: Lesson[] = [];
    id: any;
    sub: any;
    userName: any;

  constructor(private activatedRoute: ActivatedRoute, private lessonService: LessonService, private router: Router) { }


  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe(params => { 
      console.log(params);
       this.id = params.get('id'); 
       this.userName = params.get('userName'); 
       this.loadLessonsList();
   });
  }
  
  
  loadLessonsList() {
      let self = this;
      if (self.lessons.length === 0) {
        var id = parseInt(self.id);
        if (!isNaN(id)) {
          self.lessonService.getLessonsByUserId(id)
          .subscribe(response =>
            self.lessons = response);
        }
      }
  }
}