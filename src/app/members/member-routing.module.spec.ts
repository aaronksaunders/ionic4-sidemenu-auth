import { MemberRoutingModule } from './member-routing.module';

describe('MemberRoutingModule', () => {
  let memberRoutingModule: MemberRoutingModule;

  beforeEach(() => {
    memberRoutingModule = new MemberRoutingModule();
  });

  it('should create an instance', () => {
    expect(memberRoutingModule).toBeTruthy();
  });
});
