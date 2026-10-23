import { TestBed } from '@angular/core/testing';
import { Inscricao } from './inscrição';

describe('Inscrição', () => {
  let service: Inscricao;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Inscricao);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
