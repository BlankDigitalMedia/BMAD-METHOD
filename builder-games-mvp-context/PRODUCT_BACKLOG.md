# Product Backlog

This file tracks all deferred items, enhancements, and future work for the Builder Games MVP.

## Authentication (Story 1.1) - Deferred Items

### Critical
- [ ] **Password Reset Flow**
  - Add "Forgot Password" link to login form
  - Implement password reset email flow
  - Create reset password page

### Enhancements
- [ ] **OAuth Integration**
  - Complete GitHub OAuth setup
  - Complete Google OAuth setup
  - Handle OAuth error cases

### Technical Debt
- [ ] **Auth Improvements**
  - Add rate limiting for auth endpoints
  - Implement account lockout after failed attempts
  - Add security headers for auth routes

## User Profiles (Future Stories)

### Story 1.2 - Basic Profile Display
- [ ] Create profile page layout
- [ ] Display basic user information
- [ ] Show XP and reputation metrics

### Story 1.3 - Profile Editing
- [ ] Add profile editing functionality
- [ ] Implement avatar uploads
- [ ] Add social links

## Posts & Feeds (Future Stories)

### Story 1.4 - Text Posts
- [ ] Create post creation form
- [ ] Implement post display
- [ ] Add post interactions (like, comment)

### Story 1.5 - Activity Feed
- [ ] Create global activity feed
- [ ] Implement filtering and sorting
- [ ] Add infinite scroll

## Notifications (Future Stories)

### Story 1.6 - Real-time Notifications
- [ ] Set up notification system
- [ ] Create notification UI components
- [ ] Implement real-time updates

## Technical Improvements

### Performance
- [ ] Optimize database queries
- [ ] Implement caching strategy
- [ ] Add pagination for lists

### Testing
- [ ] Add unit tests for auth flows
- [ ] Add integration tests for critical paths
- [ ] Set up E2E testing

### Documentation
- [ ] Update API documentation
- [ ] Add inline code documentation
- [ ] Create user guides

## How to Use This Backlog

1. **Prioritization**: Items at the top of each section are higher priority
2. **Status**: Use [ ] for todo, [x] for completed
3. **Estimation**: Add story points or T-shirt sizes when planning sprints
4. **Dependencies**: Note any dependencies between items
5. **Labels**: Consider adding labels like `bug`, `enhancement`, `tech-debt`

## Changelog

### 2025-06-03
- Created initial backlog
- Added deferred items from Story 1.1
- Outlined future stories for Sprint 1
