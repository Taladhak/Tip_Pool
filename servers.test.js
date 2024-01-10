
describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // Initialization logic for server tests
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  afterEach(function() {
    // Teardown logic: Reset the server data
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = '';
    serverNameInput.value = '';
  });
});


