
var c = contract.methods

var totalTokens = () => c._tTotal();
var rTotal      = () => c._rTotal();
var totalFees   = () => c._tFeeTotal();

var getCoinAddress      = (index) => c.getCoinAddress(index);
var getCoinVotes        = (index) => c.getCoinVotes(index);
var getBalancedRatio    = (index) => c.getBalancedRatio(index);
var getImbalancedRatio  = (index) => c.getImbalancedRatio(index);
var getLastEpochPrices  = (index) => c.getLastEpochPrices(index);

var f                   = () => c.f();
var u                   = () => c.u();
var v                   = () => c.v();
var b                   = () => c.b();

var totalVotesCast      = () => c.totalVotesCast();
var lastVotesCast       = () => c.lastVotesCast();

var epochNumber         = () => c.epochNumber();
var lastEpochRebalance  = () => c.lastEpochRebalance();
var epochLength         = () => c.epochLength();
var theta               = () => c.theta();
var theta_max           = () => c.theta_max();
var theta_granularity   = () => c.theta_granularity();
var delta               = () => c.delta();
var delta_t             = () => c.delta_t();
var delta_w             = () => c.delta_w();
var delta_1             = () => c.delta_1();
var delta_2             = () => c.delta_2();
var rebalance_case      = () => c.rebalance_case();

var nativecoin          = () => c.nativecoin();
var stablecoin          = () => c.stablecoin();

var maxVotesAllowed     = () => c.maxVotesAllowed();
var decimals            = () => c.decimals();

var balanceOf           = (address) => c.balanceOf(address);
var lastEpochVoteCast   = (address) => c.lastEpochVoteCast(address);


  
