const TYPES = {
  Routeable: Symbol.for('Routeable'),
  Responseable: Symbol.for('Responseable'),
  Appeable: Symbol.for('Appeable'),
  Schemable: Symbol.for('Schemable'),
  ConnectionableProvider: Symbol.for('ConnectionableProvider'),
  GeteableModel: Symbol.for('GeteableModel'),
  Authenticateable: Symbol.for('Authenticateable'),
  Validateable: Symbol.for('Validateable'),
  Router: Symbol.for('Router'),
  Validable: Symbol.for('Validable'),
  ResponseableDomain: Symbol.for('ResponseableDomain'),
  Authenticable: Symbol.for('Authenticable'),
  CreateableToken: Symbol.for('CreateableToken'),
  Modelable: Symbol.for('Modelable'),

  Controlleable: Symbol.for('Controlleable'),
  Updateable: Symbol.for('Updateable'),
  GeteableById: Symbol.for('GeteableById'),
  Saveable: Symbol.for('Saveable'),
  GeteableAll: Symbol.for('GeteableAll'),
  Searcheable: Symbol.for('Searcheable'),
  
  GeteableCompanyStorage: Symbol.for('GeteableCompanyStorage'),
  
  Login: Symbol.for('Login'),
  User: Symbol.for('User'),
  Session: Symbol.for('Session'),
  Company: Symbol.for('Company'),
  Bank: Symbol.for('Bank'),
  Item: Symbol.for('Item'),
  Category: Symbol.for('Category'),
  Transaction: Symbol.for('Transaction'),
  Subcategory: Symbol.for('Subcategory'),
  Message: Symbol.for('Message'),

  UserInterface: Symbol.for('UserInterface'),
  SessionInterface: Symbol.for('SessionInterface'),
  CompanyInterface: Symbol.for('CompanyInterface'),
  BankInterface: Symbol.for('BankInterface'),
  ItemInterface: Symbol.for('ItemInterface'),
  CategoryInterface: Symbol.for('CategoryInterface'),
  TransactionInterface: Symbol.for('TransactionInterface'),
  SubcategoryInterface: Symbol.for('SubcategoryInterface'),
  MessageInterface: Symbol.for('MessageInterface'),

  SessionBuilderable: Symbol.for('SessionBuilderable'),

  UserServiceableDomain: Symbol.for('UserServiceableDomain'),
  SessionServiceableDomain: Symbol.for('SessionServiceableDomain'),
  CompanyServiceableDomain: Symbol.for('CompanyServiceableDomain'),
  BankServiceableDomain: Symbol.for('BankServiceableDomain'),
  ItemServiceableDomain: Symbol.for('ItemServiceableDomain'),
  CategoryServiceableDomain: Symbol.for('CategoryServiceableDomain'),
  TransactionServiceableDomain: Symbol.for('TransactionServiceableDomain'),
  SubcategoryServiceableDomain: Symbol.for('SubcategoryServiceableDomain'),
  MessageServiceableDomain: Symbol.for('MessageServiceableDomain'),

  Post: Symbol.for('Post'),
  PostInterface: Symbol.for('PostInterface'),
  PostServiceableDomain: Symbol.for('PostServiceableDomain'),

  Proposal: Symbol.for('Proposal'),
  ProposalInterface: Symbol.for('ProposalInterface'),
  ProposalServiceableDomain: Symbol.for('ProposalServiceableDomain'),

  ProposalState: Symbol.for('ProposalState'),
  ProposalStateInterface: Symbol.for('ProposalStateInterface'),
  ProposalStateServiceableDomain: Symbol.for('ProposalStateServiceableDomain'),
  
};

export default TYPES;