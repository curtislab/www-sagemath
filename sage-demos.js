cat sage-demos.txt | sed "s/\t/\+ '/" | sed "/^+ '/ s/$/'/" | sed "s/<\!--/\t)}\n\nfunction/" | sed "s/() {document.write(''/() {document.write(''/"


	)}

function advanced_01() {document.write(''

+ '### Simulates a system in which T-cell activation is irreversible' + '<br>'
+ '### Graphs and compares stochastic and deterministic trajectories' + '<br>'
+ '### Check out Sage Math! www.sagemath.org' + '<br>'
+ '### STOCHASTIC - simulated with the Gillespie algorithm' + '<br>'

+ '### Initialize some stuff' + '<br>'
+ 'var('t dt tf Tprint')' + '<br>'
+ 'var('at m i')' + '<br>'
+ 'X = [100,100,100,100,100]                    ## holds [species], ICs (n0,n1,n2,n3,n4)' + '<br>'
+ 'k = [0.1,0.1,0.1,0.1,0.2,0.2,0.2,0.2,10.0]   ## holds rate constants (4x k+,4x k-)' + '<br>'
+ 'a = [0,0,0,0,0,0,0,0,0]                      ## holds calc'd rxn rates (once they ARE calculated)' + '<br>'
+ 'r = [0,0,0,0,0,0,0,0,0]                      ## holds the random numbers (once they ARE created)' + '<br>'
+ 'sol = []                                     ## holds the solution' + '<br>'

+ 't = 0                ## time, start' + '<br>'
+ 'tf = 200             ## time, end' + '<br>'
+ 'dt = 0.01            ## time, step (observational frequency)' + '<br>'
+ 'm = len(a)           ## the number of reactions under consideration' + '<br>'
+ 'Tprint = t' + '<br>'

+ '### Loop 0: continues until target time ###' + '<br>'
+ 'while (t<tf):' + '<br>'
+ '    at = 0  ## 'overall reaction rate'; takes into account all reactions' + '<br>'
+ '    ## calculate the current reaction rates' + '<br>'
+ '    ' + '<br>'
+ '    ## forward reactions:' + '<br>'
+ '    a[0] = k[0]*X[0]' + '<br>'
+ '    a[1] = k[1]*X[1]' + '<br>'
+ '    a[2] = k[2]*X[2]' + '<br>'
+ '    a[3] = k[3]*X[3]' + '<br>'
+ '    ' + '<br>'
+ '    ## reverse reactions:' + '<br>'
+ '    a[4] = k[4]*X[1]' + '<br>'
+ '    a[5] = k[5]*X[2]' + '<br>'
+ '    a[6] = k[6]*X[3]' + '<br>'
+ '    a[7] = k[7]*X[4]' + '<br>'
+ '    ' + '<br>'
+ '    ## irreversible activation:' + '<br>'
+ '    a[8] = k[8]*X[4]' + '<br>'
+ '    ' + '<br>'
+ '    for j in range(0,m):' + '<br>'
+ '	at = at + a[j]         ## calculate the 'overall reaction rate'' + '<br>'
+ '	r[j] = random()        ## generate the needed random numbers' + '<br>'

+ '    t = t+(1/at)*ln(1/r[0])    ## next rxn occurs in time increment 'tau'' + '<br>'
+ '    while(t>=Tprint):                                 ## until the next reaction occurs..' + '<br>'
+ '	sol.append([Tprint,X[0],X[1],X[2],X[3],X[4]]) ## the concentrations stay the same' + '<br>'
+ '	Tprint=Tprint+dt                              ## as time increments' + '<br>'
+ '    ' + '<br>'
+ '    i = 1                          ## (which reaction is being investigated)' + '<br>'
+ '    while (i <= m):                ## and when a reaction DOES occur...' + '<br>'
+ '	sum = 0' + '<br>'
+ '	for l in range(0,i):' + '<br>'
+ '	    sum = sum + a[l]    ## sum together the rates (for normalization)' + '<br>'
+ '	if (sum > r[1]*at):     ## randomly select a value (0, total rate)' + '<br>'
+ '	    if (i == 1):        ## if value falls within rate #1, rxn #1 occurs' + '<br>'
+ '	        X[0] = X[0] - 1' + '<br>'
+ '	        X[1] = X[1] + 1' + '<br>'
+ '	        X[2] = X[2]' + '<br>'
+ '	        X[3] = X[3]' + '<br>'
+ '	        X[4] = X[4]' + '<br>'
+ '	        break' + '<br>'
+ '	    elif (i == 2):      ## if value falls within rate #2, rxn #2 occurs' + '<br>'
+ '	        X[0] = X[0]' + '<br>'
+ '	        X[1] = X[1] - 1' + '<br>'
+ '	        X[2] = X[2] + 1' + '<br>'
+ '	        X[3] = X[3]' + '<br>'
+ '	        X[4] = X[4]' + '<br>'
+ '	        break' + '<br>'
+ '	    elif (i == 3):      ## if value falls within rate #3, rxn #3 occurs' + '<br>'
+ '	        X[0] = X[0]' + '<br>'
+ '	        X[1] = X[1]' + '<br>'
+ '	        X[2] = X[2] - 1' + '<br>'
+ '	        X[3] = X[3] + 1' + '<br>'
+ '	        X[4] = X[4]' + '<br>'
+ '	        break' + '<br>'
+ '	    elif (i == 4):      ## if value falls within rate #4, rxn #4 occurs' + '<br>'
+ '	        X[0] = X[0]' + '<br>'
+ '	        X[1] = X[1]' + '<br>'
+ '	        X[2] = X[2]' + '<br>'
+ '	        X[3] = X[3] - 1' + '<br>'
+ '	        X[4] = X[4] + 1' + '<br>'
+ '	        break' + '<br>'
+ '	    elif (i == 5):      ## if value falls within rate #5, rxn #5 occurs' + '<br>'
+ '	        X[0] = X[0] + 1' + '<br>'
+ '	        X[1] = X[1] - 1' + '<br>'
+ '	        X[2] = X[2]' + '<br>'
+ '	        X[3] = X[3]' + '<br>'
+ '	        X[4] = X[4]' + '<br>'
+ '	        break' + '<br>'
+ '	    elif (i == 6):      ## if value falls within rate #6, rxn #6 occurs' + '<br>'
+ '	        X[0] = X[0]' + '<br>'
+ '	        X[1] = X[1] + 1' + '<br>'
+ '	        X[2] = X[2] - 1' + '<br>'
+ '	        X[3] = X[3]' + '<br>'
+ '	        X[4] = X[4]' + '<br>'
+ '	        break' + '<br>'
+ '	    elif (i == 7):      ## if value falls within rate #7, rxn #7 occurs' + '<br>'
+ '	        X[0] = X[0]' + '<br>'
+ '	        X[1] = X[1]' + '<br>'
+ '	        X[2] = X[2] + 1' + '<br>'
+ '	        X[3] = X[3] - 1' + '<br>'
+ '	        X[4] = X[4]' + '<br>'
+ '	        break' + '<br>'
+ '	    elif (i == 8):      ## if value falls within rate #8, rxn #8 occurs' + '<br>'
+ '	        X[0] = X[0]' + '<br>'
+ '	        X[1] = X[1]' + '<br>'
+ '	        X[2] = X[2]' + '<br>'
+ '	        X[3] = X[3] + 1' + '<br>'
+ '	        X[4] = X[4] - 1' + '<br>'
+ '	        break' + '<br>'
+ '	    elif (i == 9):      ## if value falls within rate #9, rxn #9 occurs' + '<br>'
+ '	        X[0] = X[0]' + '<br>'
+ '	        X[1] = X[1]' + '<br>'
+ '	        X[2] = X[2]' + '<br>'
+ '	        X[3] = X[3]' + '<br>'
+ '	        X[4] = X[4] - 1' + '<br>'
+ '	        break' + '<br>'
+ '	    else:' + '<br>'
+ '	        show("something went wrong...")' + '<br>'
+ '	i = i + 1' + '<br>'
+ '#show(sol)' + '<br>'

+ '### Simple Plotting' + '<br>'
+ 'sol0 = []' + '<br>'
+ 'sol1 = []' + '<br>'
+ 'sol2 = []' + '<br>'
+ 'sol3 = []' + '<br>'
+ 'sol4 = []' + '<br>'
+ 'sol5 = []' + '<br>'

+ 'for q in range(0,len(sol)):' + '<br>'
+ '    sol0.append(sol[q][0])' + '<br>'
+ '    sol1.append(sol[q][1])' + '<br>'
+ '    sol2.append(sol[q][2])' + '<br>'
+ '    sol3.append(sol[q][3])' + '<br>'
+ '    sol4.append(sol[q][4])' + '<br>'
+ '    sol5.append(sol[q][5])' + '<br>'

+ 'a = list_plot([])' + '<br>'
+ 'a += list_plot(zip(sol0,sol1), color='indianred')' + '<br>'
+ 'a += list_plot(zip(sol0,sol2), color='lightsalmon')' + '<br>'
+ 'a += list_plot(zip(sol0,sol3), color='khaki')' + '<br>'
+ 'a += list_plot(zip(sol0,sol4), color='lightgreen')' + '<br>'
+ 'a += list_plot(zip(sol0,sol5), color='lightblue')' + '<br>'
+ '#a.set_axes_range(0,100,0,200)   ## (xmin,xmax,ymin,ymax)' + '<br>'
+ '#show(a)' + '<br>'

+ '### DETERMINISTIC' + '<br>'

+ '## This sheet simulates the dynamics of T-Cell Receptor activation' + '<br>'
+ 'var('k1 k2 k3 k4 k5 k6 k7 k8 k9') ## kinetic parameters' + '<br>'
+ 'var('N00 N10 N20 N30 N40')        ## initial conditions' + '<br>'
+ 'var('N0 N1 N2 N3 N4 t')           ## variables' + '<br>'
+ 'var('r1 r2 r3 r4 r5')             ## reactions' + '<br>'

+ '## INITIAL CONDITIONS' + '<br>'
+ 'N00 = 100    ##' + '<br>'
+ 'N10 = 100    ##' + '<br>'
+ 'N20 = 100    ##' + '<br>'
+ 'N30 = 100    ##' + '<br>'
+ 'N40 = 100    ##' + '<br>'

+ '## CONSTANTS' + '<br>'
+ 'k1 = k[0]' + '<br>'
+ 'k2 = k[1]' + '<br>'
+ 'k3 = k[2]' + '<br>'
+ 'k4 = k[3]' + '<br>'
+ 'k5 = k[4]' + '<br>'
+ 'k6 = k[5]' + '<br>'
+ 'k7 = k[6]' + '<br>'
+ 'k8 = k[7]' + '<br>'
+ 'k9 = k[8]' + '<br>'

+ '## CALCULATION PARAMETERS' + '<br>'
+ 'end_points = 200' + '<br>'
+ 'stepsize = 0.1' + '<br>'
+ 'steps = end_points/stepsize' + '<br>'
+ 'ics = [0,N00,N10,N20,N30,N40]' + '<br>'
+ 'dvars = [N0,N1,N2,N3,N4]' + '<br>'

+ '## EQUATIONS' + '<br>'
+ 'r1 = (diff(N0,t) == k5*N1-k1*N0)' + '<br>'
+ 'r2 = (diff(N1,t) == k1*N0+k6*N2-k2*N1-k5*N1)' + '<br>'
+ 'r3 = (diff(N2,t) == k2*N1+k7*N3-k3*N2-k6*N2)' + '<br>'
+ 'r4 = (diff(N3,t) == k3*N2+k8*N4-k4*N3-k7*N3)' + '<br>'
+ 'r5 = (diff(N4,t) == k4*N3-k8*N4-k9*N4)' + '<br>'

+ '## NUMERICAL SOLUTION OF A SERIES OF DIFFERENTIAL EQUATIONS' + '<br>'
+ 'des = [r1.rhs(), r2.rhs(), r3.rhs(), r4.rhs(), r5.rhs()]' + '<br>'
+ 'sol = desolve_system_rk4(des,dvars,ics,ivar=t,end_points=end_points,step=stepsize)' + '<br>'

+ '## Process the output into a form that can be graphed' + '<br>'
+ 'sols_1=[]' + '<br>'
+ 'sols_2=[]' + '<br>'
+ 'sols_3=[]' + '<br>'
+ 'sols_4=[]' + '<br>'
+ 'sols_5=[]' + '<br>'

+ 'for i in range(steps):' + '<br>'
+ '    sols_1.append([sol[i][0],sol[i][1]])' + '<br>'
+ '    sols_2.append([sol[i][0],sol[i][2]])' + '<br>'
+ '    sols_3.append([sol[i][0],sol[i][3]])' + '<br>'
+ '    sols_4.append([sol[i][0],sol[i][4]])' + '<br>'
+ '    sols_5.append([sol[i][0],sol[i][5]])' + '<br>'

+ '################################################' + '<br>'
+ '####   Unnecessarily Fancy Plotting Stuff   ####' + '<br>'
+ '################################################' + '<br>'
+ '## Create a plot object' + '<br>'
+ '#a = plot([],figsize=[6,4])' + '<br>'

+ '## Set the plot parameters' + '<br>'
+ 'title = "TCR Activation"                                 ## Graph Title' + '<br>'
+ 'xmin = 0                                                 ## X minimum' + '<br>'
+ 'xmax = end_points                                        ## X maximum' + '<br>'
+ 'ymin = 0                                                 ## Y minimum' + '<br>'
+ 'ymax = 280                                               ## Y maximum' + '<br>'

+ '## Add a title to the plot' + '<br>'
+ 'a += text(title,(xmax/1.8,ymax),color='black',fontsize=15)' + '<br>'
+ ' ' + '<br>'
+ '## Add the desired lines to the plot' + '<br>'
+ 'a += list_plot(sols_1,color='red',legend_label='N0')' + '<br>'
+ 'a += list_plot(sols_2,color='orange',legend_label='N1')' + '<br>'
+ 'a += list_plot(sols_3,color='yellow',legend_label='N2')' + '<br>'
+ 'a += list_plot(sols_4,color='green',legend_label='N3')' + '<br>'
+ 'a += list_plot(sols_5,color='blue',legend_label='N4')' + '<br>'

+ '## For more information on plots in general, evaluate 'plot?'' + '<br>'
+ '## For a list of legend options, evaluate 'a.set_legend_options?'' + '<br>'
+ '## For a list of Sage predefined colors, evaluate 'sorted(colors)'' + '<br>'
+ '## View predefined colors: http://en.wikipedia.org/wiki/X11_color_names' + '<br>'

+ '## Additional plot options' + '<br>'
+ '#a.set_axes_range(xmin,xmax,ymin,ymax)' + '<br>'
+ 'a.axes_labels(['time','number'])' + '<br>'
+ 'a.axes_label_color('grey')' + '<br>'
+ 'a.set_legend_options(ncol=5,borderaxespad=5,back_color='whitesmoke',fancybox=true)' + '<br>'
+ 'show(a)' + '<br>'


	)}

function calculus_01() {document.write(''

+ 'f(x) = x^2 * sin(x) + cos(x)' + '<br>'
+ 'show(f(x))' + '<br>'
+ 'show(f(x=2))' + '<br>'
+ 'show(f(x=2).n())' + '<br>'


	)}

function calculus_02() {document.write(''

+ 'f(x) = x^2 * sin(x) + cos(x)' + '<br>'
+ 'd = diff(f(x),x)' + '<br>'
+ 'i = integrate(f(x),x)' + '<br>'
+ 'show("the derivative is: " + str(d))' + '<br>'
+ 'show("the integral is: " + str(i))' + '<br>'


	)}

function calculus_03() {document.write(''

+ 'f(x) = x^2 * sin(x) + cos(x)' + '<br>'
+ 'numerical_integral(f,2,3)' + '<br>'


	)}

function calculus_04() {document.write(''

+ 'f(x) = x^2 * sin(x) + cos(x)' + '<br>'
+ 'plot(f,x,(0,6))' + '<br>'


	)}

function cell-growth_01() {document.write(''

+ '# First, define the cell growth differential equation' + '<br>'
+ 'var('X t')' + '<br>'
+ 'X = function('X',t)' + '<br>'
+ 'diffeqs = diff(X,t) == X' + '<br>'

+ '# Next, solve it and show the solution' + '<br>'
+ 'solution(t) = desolve(diffeqs,[X,t],[0,1])' + '<br>'
+ 'show (solution(t))' + '<br>'
+ 'plot(solution(t),(t,0,1),figsize=(6,4))' + '<br>'


	)}

function cell-growth_02() {document.write(''

+ '## Variables' + '<br>'
+ 'var('mu t X S')' + '<br>'
+ '## Equations' + '<br>'
+ 'mu = (S)/(1+S)' + '<br>'
+ 'des = [mu*X, -mu*X]' + '<br>'
+ 'sol = desolve_system_rk4(des, [X,S], ics=[0,0.1,10], ivar=t)' + '<br>'
+ '## The data needs some post-processing before we can graph it:' + '<br>'
+ 'solX = []; solS = []' + '<br>'
+ 'for i in range(0,len(sol)):' + '<br>'
+ '    solX.append([sol[i][0],sol[i][1]])' + '<br>'
+ '    solS.append([sol[i][0],sol[i][2]])' + '<br>'
+ 'a = plot([],figsize=(6,4))' + '<br>'
+ 'a += list_plot(solX, color='green', legend_label='[cells]')' + '<br>'
+ 'a += list_plot(solS, color='blue', legend_label='[substrate]')' + '<br>'
+ 'a.axes_labels(['time','concentration'])' + '<br>'
+ 'show(a)' + '<br>'


	)}

function cell-growth_03() {document.write(''

+ '## Variables' + '<br>'
+ 'var('mu t X S')' + '<br>'

+ '## Equations' + '<br>'
+ 'mu = (S)/(1+S)' + '<br>'
+ 'des = lambda t,y: [(y[1]/(1+y[1]))*y[0], -(y[1]/(1+y[1]))*y[0]]' + '<br>'

+ 'T = ode_solver(function=des, y_0=[0.1,10])' + '<br>'
+ 'T.ode_solve(t_span=[0,10], num_points=100)' + '<br>'

+ 'a = plot([],figsize=(6,4))' + '<br>'
+ 'a += list_plot(T.interpolate_solution(0),color='green', legend_label='[cells]')' + '<br>'
+ 'a += list_plot(T.interpolate_solution(1),color='blue', legend_label='[substrate]')' + '<br>'
+ 'a.axes_labels(['time','concentration'])' + '<br>'
+ 'show(a)' + '<br>'


	)}

function cell-growth_04() {document.write(''

+ '## Variables' + '<br>'
+ 'var('t X S mu_max Y')' + '<br>'
+ 'mu_max = 1.0; Y = 0.5; K_m = 2.0' + '<br>'
+ '## Equations' + '<br>'
+ 'des = lambda t,y: [(mu_max*y[1]/(K_m+y[1]))*y[0], -(1/Y)*(mu_max*y[1]/(K_m+y[1]))*y[0]]' + '<br>'
+ 'T = ode_solver(function=des, y_0=[0.1,10])' + '<br>'
+ 'T.ode_solve(t_span=[0,10], num_points=100)' + '<br>'

+ 'a = plot([],figsize=(6,4))' + '<br>'
+ 'a += list_plot(T.interpolate_solution(0),color='green', legend_label='[cells]')' + '<br>'
+ 'a += list_plot(T.interpolate_solution(1),color='blue', legend_label='[substrate]')' + '<br>'
+ 'a.axes_labels(['time','concentration'])' + '<br>'
+ 'show(a)' + '<br>'


	)}

function cell-growth_05() {document.write(''

+ '## Variables' + '<br>'
+ 'var('t V V0 Vin Vout S S0 Sin')' + '<br>'
+ 'V0 = 1; Vin = 0.1; Vout = 0.1; Sin = 10; S0=0' + '<br>'
+ 'des = lambda t,y: [Vin-Vout, Sin*Vin/y[0]-y[1]*Vout/y[0]]' + '<br>'
+ 'T = ode_solver(function=des, y_0=[V0,S0])' + '<br>'
+ 'T.ode_solve(t_span=[0,100], num_points=100)' + '<br>'
+ 'a = plot([],figsize=(6,4))' + '<br>'
+ 'a += list_plot(T.interpolate_solution(0),color='grey', legend_label='volume')' + '<br>'
+ 'a += list_plot(T.interpolate_solution(1),color='blue', legend_label='[substrate]')' + '<br>'
+ 'a.axes_labels(['time',''])' + '<br>'
+ 'show(a)' + '<br>'


	)}

function cell-growth_06() {document.write(''

+ '## Variables' + '<br>'
+ 'var('t V V0 Vout S S0 Sin')' + '<br>'
+ 'V0 = 1; Sin = 10; S0=0' + '<br>'
+ 'def Vin(t):' + '<br>'
+ '    if (t-floor(t)) <= 0.1: return 1' + '<br>'
+ '    else: return 0' + '<br>'
+ 'def Vout(t): return Vin(t)' + '<br>'

+ 'des = lambda t,y: [Vin(t)-Vout(t), Sin*Vin(t)/y[0]-y[1]*Vout(t)/y[0]]' + '<br>'
+ 'T = ode_solver(function=des, y_0=[V0,S0])' + '<br>'
+ 'T.ode_solve(t_span=[0,35], num_points=1000)' + '<br>'
+ 'a = plot([],figsize=(6,4))' + '<br>'
+ 'a += list_plot(T.interpolate_solution(0),color='grey', legend_label='volume')' + '<br>'
+ 'a += list_plot(T.interpolate_solution(1),color='blue', legend_label='[substrate]')' + '<br>'
+ 'a.axes_labels(['time',''])' + '<br>'
+ 'show(a)' + '<br>'


	)}

function cell-growth_07() {document.write(''

+ '## Variables' + '<br>'
+ 'var('t V V0 Vout S S0 Sin k')' + '<br>'
+ 'V0 = 1; Sin = 10; S0=0; k = 0.025' + '<br>'
+ 'def Vin(t):' + '<br>'
+ '    if (t-floor(t)) <= 0.1: return 1' + '<br>'
+ '    else: return 0' + '<br>'
+ 'def Vout(t): return Vin(t)' + '<br>'

+ 'des = lambda t,y: [Vin(t)-Vout(t), Sin*Vin(t)/y[0]-y[1]*Vout(t)/y[0]-k*y[1]]' + '<br>'
+ 'T = ode_solver(function=des, y_0=[V0,S0])' + '<br>'
+ 'T.ode_solve(t_span=[0,35], num_points=1000)' + '<br>'
+ 'a = plot([],figsize=(6,4))' + '<br>'
+ 'a += list_plot(T.interpolate_solution(0),color='grey', legend_label='volume')' + '<br>'
+ 'a += list_plot(T.interpolate_solution(1),color='blue', legend_label='[substrate]')' + '<br>'
+ 'a.axes_labels(['time',''])' + '<br>'
+ 'show(a)' + '<br>'


	)}

function cell-growth_08() {document.write(''

+ '## Variables' + '<br>'
+ 'var('t V V0 Vout S S0 Sin k')' + '<br>'
+ 'V0 = 1; Sin = 10; S0=0; k = 0.025' + '<br>'
+ 'def Vin(t): return 0.1' + '<br>'
+ 'def Vout(t):' + '<br>'
+ '    if (t-floor(t)) <= 0.1: return 1' + '<br>'
+ '    else: return 0' + '<br>'
+ 'des = lambda t,y: [Vin(t)-Vout(t), Sin*Vin(t)-y[1]*Vout(t)/y[0]-k*y[1]/y[0]]' + '<br>'
+ 'T = ode_solver(function=des, y_0=[V0,S0])' + '<br>'
+ 'T.ode_solve(t_span=[0,35], num_points=1000)' + '<br>'
+ 'solV = T.interpolate_solution(0); solS = T.interpolate_solution(1); sol = []' + '<br>'
+ 'for i in range(0,len(T.solution)):' + '<br>'
+ '    sol.append([solS[i][0],solS[i][1]/solV[i][1]])' + '<br>'
+ 'a = plot([],figsize=(6,4))' + '<br>'
+ 'a += list_plot(solV,color='grey', legend_label='volume')' + '<br>'
+ 'a += list_plot(sol,color='blue', legend_label='[substrate]')' + '<br>'
+ 'a.axes_labels(['time','']); a.set_legend_options(loc=7); show(a)' + '<br>'


	)}

function cell-growth_09() {document.write(''

+ 'var('t V V0 Vout S S0 Sin X X0 mu_max Y K_m')' + '<br>'
+ 'V0 = 1; Sin = 10; S0=0; X0 = 0.1; mu_max = 1.0; Y = 0.5; K_m = 2.0' + '<br>'
+ 'def Vin(t): return 0.1' + '<br>'
+ 'def Vout(t): return 0.1' + '<br>'
+ 'des = lambda t,y: [Vin(t)-Vout(t), Sin*Vin(t)-y[1]*Vout(t)/y[0]-(1/Y)*(mu_max*(y[1]/y[0])/(K_m+(y[1]/y[0])))*y[2], (mu_max*(y[1]/y[0])/(K_m+(y[1]/y[0])))*y[2]-Vout(t)*y[2]/y[0]]' + '<br>'
+ 'T = ode_solver(function=des, y_0=[V0,S0,X0])' + '<br>'
+ 'T.ode_solve(t_span=[0,35], num_points=1000)' + '<br>'
+ 'solV = T.interpolate_solution(0); solS = T.interpolate_solution(1); solX = T.interpolate_solution(2); sol1 = []; sol2 = []' + '<br>'
+ 'for i in range(0,len(T.solution)):' + '<br>'
+ '    sol1.append([solS[i][0],solS[i][1]/solV[i][1]])' + '<br>'
+ '    sol2.append([solX[i][0],solX[i][1]/solV[i][1]])' + '<br>'
+ 'a = plot([],figsize=(6,4))' + '<br>'
+ 'a += list_plot(solV,color='grey', legend_label='volume')' + '<br>'
+ 'a += list_plot(sol1,color='blue', legend_label='[substrate]')' + '<br>'
+ 'a += list_plot(sol2,color='green', legend_label='[cells]')' + '<br>'
+ 'a.axes_labels(['time','']); a.set_legend_options(loc=7); show(a)' + '<br>'


	)}

function cell-growth_10() {document.write(''

+ 'var('t V V0 Vout S S0 Sin X X0 mu_max Y K_m')' + '<br>'
+ 'V0 = 1; Sin = 10; S0=0; X0 = 0.1; mu_max = 1.0; Y = 0.5; K_m = 2.0' + '<br>'
+ 'def Vin(t): ' + '<br>'
+ '    if (t-floor(t)) <= 0.1: return 1' + '<br>'
+ '    else: return 0' + '<br>'
+ 'def Vout(t): return 0.1' + '<br>'
+ 'des = lambda t,y: [Vin(t)-Vout(t), Sin*Vin(t)-y[1]*Vout(t)/y[0]-(1/Y)*(mu_max*(y[1]/y[0])/(K_m+(y[1]/y[0])))*y[2], (mu_max*(y[1]/y[0])/(K_m+(y[1]/y[0])))*y[2]-Vout(t)*y[2]/y[0]]' + '<br>'
+ 'T = ode_solver(function=des, y_0=[V0,S0,X0])' + '<br>'
+ 'T.ode_solve(t_span=[0,35], num_points=1000)' + '<br>'
+ 'solV = T.interpolate_solution(0); solS = T.interpolate_solution(1); solX = T.interpolate_solution(2); sol1 = []; sol2 = []' + '<br>'
+ 'for i in range(0,len(T.solution)):' + '<br>'
+ '    sol1.append([solS[i][0],solS[i][1]/solV[i][1]])' + '<br>'
+ '    sol2.append([solX[i][0],solX[i][1]/solV[i][1]])' + '<br>'
+ 'a = plot([],figsize=(6,4))' + '<br>'
+ 'a += list_plot(solV,color='grey', legend_label='volume')' + '<br>'
+ 'a += list_plot(sol1,color='blue', legend_label='[substrate]')' + '<br>'
+ 'a += list_plot(sol2,color='green', legend_label='[cells]')' + '<br>'
+ 'a.axes_labels(['time','']); a.set_legend_options(loc=7); show(a)' + '<br>'


	)}

function cell-growth_11() {document.write(''

+ 'var('t V V0 Vout S S0 Sin X X0 mu_max Y K_m')' + '<br>'
+ 'V0 = 1; Sin = 10; S0=0; X0 = 0.1; mu_max = 1.0; Y = 0.5; K_m = 2.0' + '<br>'
+ 'def Vin(t): return 0.1' + '<br>'
+ 'def Vout(t):' + '<br>'
+ '    if (t-floor(t)) <= 0.1: return 1' + '<br>'
+ '    else: return 0' + '<br>'
+ 'des = lambda t,y: [Vin(t)-Vout(t), Sin*Vin(t)-y[1]*Vout(t)/y[0]-(1/Y)*(mu_max*(y[1]/y[0])/(K_m+(y[1]/y[0])))*y[2], (mu_max*(y[1]/y[0])/(K_m+(y[1]/y[0])))*y[2]-Vout(t)*y[2]/y[0]]' + '<br>'
+ 'T = ode_solver(function=des, y_0=[V0,S0,X0])' + '<br>'
+ 'T.ode_solve(t_span=[0,35], num_points=1000)' + '<br>'
+ 'solV = T.interpolate_solution(0); solS = T.interpolate_solution(1); solX = T.interpolate_solution(2); sol1 = []; sol2 = []' + '<br>'
+ 'for i in range(0,len(T.solution)):' + '<br>'
+ '    sol1.append([solS[i][0],solS[i][1]/solV[i][1]])' + '<br>'
+ '    sol2.append([solX[i][0],solX[i][1]/solV[i][1]])' + '<br>'
+ 'a = plot([],figsize=(6,4))' + '<br>'
+ 'a += list_plot(solV,color='grey', legend_label='volume')' + '<br>'
+ 'a += list_plot(sol1,color='blue', legend_label='[substrate]')' + '<br>'
+ 'a += list_plot(sol2,color='green', legend_label='[cells]')' + '<br>'
+ 'a.axes_labels(['time','']); a.set_legend_options(loc=7); show(a)' + '<br>'


	)}

function cell-growth_12() {document.write(''

+ 'var('t V V0 Vout theta R H H0 k')' + '<br>'
+ 'V0 = 1; k = 0.12; theta = pi()/4; H0 = (3*V0/(pi()*tan(theta)^2))^(1/3)' + '<br>'
+ 'def Vin(t,H):' + '<br>'
+ '    if(H>=0): return 0.0' + '<br>'
+ '    else: return 0.0' + '<br>'
+ 'def Vout(t,H):' + '<br>'
+ '    if(H>=0): return 0.1' + '<br>'
+ '    else: return 0.0' + '<br>'
+ 'des = lambda t,y: [Vin(t,H=y[1])-Vout(t,H=y[1]), (1/(pi()*tan(theta)^2*y[1]^2))*(Vin(t,H=y[1])-Vout(t,H=y[1]))]' + '<br>'
+ 'T = ode_solver(function=des, y_0=[V0,H0])' + '<br>'
+ 'T.ode_solve(t_span=[0,10], num_points=100)' + '<br>'
+ 'a = plot([],figsize=(6,4))' + '<br>'
+ 'a += list_plot(T.interpolate_solution(0),color='lightgrey', legend_label='V, dV/dt=const')' + '<br>'
+ 'a += list_plot(T.interpolate_solution(1),color='lightblue', legend_label='H, dV/dt=const')' + '<br>'
+ 'a.axes_labels(['time',''])' + '<br>'
+ 'show(a)' + '<br>'


	)}

function cell-growth_13() {document.write(''

+ 'var('t V V0 Vout theta R H H0 k')' + '<br>'
+ 'V0 = 1; k = 0.12; theta = pi()/4; H0 = (3*V0/(pi()*tan(theta)^2))^(1/3)' + '<br>'
+ 'def Vin(t,H):' + '<br>'
+ '    if(H>=0): return 0.0' + '<br>'
+ '    else: return 0.0' + '<br>'
+ 'def Vout(t,H):' + '<br>'
+ '    if(H>=0): return k*sqrt(H)' + '<br>'
+ '    else: return 0.0' + '<br>'
+ 'des = lambda t,y: [Vin(t,H=y[1])-Vout(t,H=y[1]), (1/(pi()*tan(theta)^2*y[1]^2))*(Vin(t,H=y[1])-Vout(t,H=y[1]))]' + '<br>'
+ 'T = ode_solver(function=des, y_0=[V0,H0])' + '<br>'
+ 'T.ode_solve(t_span=[0,10], num_points=100)' + '<br>'
+ 'a = plot([],figsize=(6,4))' + '<br>'
+ 'a += list_plot(T.interpolate_solution(0),color='darkgrey', legend_label='V, dV/dt~sqrt(H)')' + '<br>'
+ 'a += list_plot(T.interpolate_solution(1),color='darkblue', legend_label='H, dV/dt~sqrt(H)')' + '<br>'
+ 'a.axes_labels(['time',''])' + '<br>'
+ 'show(a)' + '<br>'


	)}

function cell-growth_14() {document.write(''

+ 'var('t V V0 Vout theta R H H0 k')' + '<br>'
+ 'V0 = 1; k = 0.12; theta = pi()/4; H0 = (3*V0/(pi()*tan(theta)^2))^(1/3)' + '<br>'

+ '### Constant Controlled Outflow' + '<br>'
+ 'def Vin(t,H):' + '<br>'
+ '    if(H>=0): return 0.0' + '<br>'
+ '    else: return 0.0' + '<br>'
+ 'def Vout(t,H):' + '<br>'
+ '    if(H>=0): return 0.1' + '<br>'
+ '    else: return 0.0' + '<br>'
+ 'des = lambda t,y: [Vin(t,H=y[1])-Vout(t,H=y[1]), (1/(pi()*tan(theta)^2*y[1]^2))*(Vin(t,H=y[1])-Vout(t,H=y[1]))]' + '<br>'
+ 'T = ode_solver(function=des, y_0=[V0,H0])' + '<br>'
+ 'T.ode_solve(t_span=[0,10], num_points=100)' + '<br>'
+ 'a = plot([],figsize=(6,4))' + '<br>'
+ 'a += list_plot(T.interpolate_solution(0),color='lightgrey', legend_label='V, dV/dt=const')' + '<br>'
+ 'a += list_plot(T.interpolate_solution(1),color='lightblue', legend_label='H, dV/dt=const')' + '<br>'
+ 'a.axes_labels(['time',''])' + '<br>'

+ '### Gravity Outflow, dV/dt ~ sqrt(H)' + '<br>'
+ 'def Vin(t,H):' + '<br>'
+ '    if(H>=0): return 0.0' + '<br>'
+ '    else: return 0.0' + '<br>'
+ 'def Vout(t,H):' + '<br>'
+ '    if(H>=0): return k*sqrt(H)' + '<br>'
+ '    else: return 0.0' + '<br>'
+ 'des = lambda t,y: [Vin(t,H=y[1])-Vout(t,H=y[1]), (1/(pi()*tan(theta)^2*y[1]^2))*(Vin(t,H=y[1])-Vout(t,H=y[1]))]' + '<br>'
+ 'T = ode_solver(function=des, y_0=[V0,H0])' + '<br>'
+ 'T.ode_solve(t_span=[0,10], num_points=100)' + '<br>'
+ 'a += list_plot(T.interpolate_solution(0),color='darkgrey', legend_label='V, dV/dt~sqrt(H)')' + '<br>'
+ 'a += list_plot(T.interpolate_solution(1),color='darkblue', legend_label='H, dV/dt~sqrt(H)')' + '<br>'
+ 'show(a)' + '<br>'


	)}

function cell-growth_15() {document.write(''

+ 'var('t T T0 Tci h A p C V Vc H0 dH')' + '<br>'
+ 'T0 = 100; Tci = 15; h = 25; A = 0.61; p = 1; C = 4.186; V = 19; Vc = 5' + '<br>'
+ 'H0 = 0.161+T0*p*C*V+0.5*4.5' + '<br>'
+ '# know that Tco = Tci + (-dH/dt)*(V/Vc)*(1/(p*C*V)); solve for dH/dt, where dH/dt = -h*A*LMTD' + '<br>'
+ 'Tco = (Tci + (-dH)*(V/Vc)*(1/(p*C*V)))' + '<br>'
+ 'f = (dH == -h*A*((T-Tco)-(T-Tci))/ln((T-Tco)/(T-Tci)))' + '<br>'
+ 'dH(T) = solve(f,dH)[0].rhs()' + '<br>'

+ '# y[0] = H, y[1] = T; dT/dt = (1/p*C*V)*(dH/dt)' + '<br>'
+ 'des = lambda t,y: [dH(T=y[1]), dH(T=y[1])*(1/(p*C*V))]' + '<br>'
+ 'Q = ode_solver(function=des, y_0=[H0,T0])' + '<br>'
+ 'Q.ode_solve(t_span=[0,25], num_points=100)' + '<br>'

+ 'f = Q.interpolate_solution(0); g = []' + '<br>'
+ 'for i in range(1,len(f)):' + '<br>'
+ '    g.append([f[i][0],Tci+(-((f[i][1]-f[i-1][1])/(f[i][0]-f[i-1][0]))*(V/Vc)*(1/(p*C*V)))])' + '<br>'
+ '    ' + '<br>'
+ 'a = plot([],figsize=(6,4))' + '<br>'
+ 'a += list_plot(Q.interpolate_solution(1), color='blue', legend_label='dT/dt')' + '<br>'
+ 'a += list_plot(g, color='grey', legend_label='Tco')' + '<br>'
+ 'a.axes_labels(['time,min','temp, C']); a.set_axes_range(0,25,0); show(a)' + '<br>'


	)}

function chemical-systems_01() {document.write(''

+ '## This sheet simulates two reversible first-order chemical reactions in series:' + '<br>'
+ '## A1 <-> A2 <-> A3' + '<br>'
+ '## The initial value problem is solved by Runge-Kutta and the dynamics are graphed' + '<br>'

+ 'var('A10 A20 A30 k1 k2 k_1 k_2')' + '<br>'
+ 'var('A1 A2 A3 t')' + '<br>'

+ 'A10 = 0.01' + '<br>'
+ 'A20 = 0.00' + '<br>'
+ 'A30 = 0.00' + '<br>'

+ 'k1 = 1' + '<br>'
+ 'k_1 = 1' + '<br>'
+ 'k2 = 1' + '<br>'
+ 'k_2 = 1' + '<br>'

+ '## Calculation Parameters' + '<br>'
+ 'end_points = 5' + '<br>'
+ 'stepsize = 0.01' + '<br>'
+ 'steps = end_points/stepsize' + '<br>'
+ 'ics = [0,A10,A20,A30]' + '<br>'

+ '## Equations' + '<br>'
+ 'r1 = (diff(A1,t) == k_1*A2 - k1*A1)' + '<br>'
+ 'r2 = (diff(A2,t) == k1*A1 - k_1*A2 - k2*A2 + k_2*A3)' + '<br>'
+ 'r3 = (diff(A3,t) == k2*A2 - k_2*A3)' + '<br>'

+ 'des = [r1.rhs(), r2.rhs(), r3.rhs()]' + '<br>'
+ 'sol = desolve_system_rk4(des,[A1,A2,A3],ics,ivar=t,end_points=end_points,step=stepsize)' + '<br>'

+ '## Process the output into a form that can be graphed' + '<br>'
+ 'sols_1=[]' + '<br>'
+ 'sols_2=[]' + '<br>'
+ 'sols_3=[]' + '<br>'

+ 'for i in range(steps):' + '<br>'
+ '    sols_1.append([sol[i][0],sol[i][1]])' + '<br>'
+ '    sols_2.append([sol[i][0],sol[i][2]])' + '<br>'
+ '    sols_3.append([sol[i][0],sol[i][3]])' + '<br>'

+ '################################################' + '<br>'
+ '####   Unnecessarily Fancy Plotting Stuff   ####' + '<br>'
+ '################################################' + '<br>'
+ '## Create a plot object' + '<br>'
+ 'a = plot([],figsize=(6,4))' + '<br>'

+ '## Set the plot parameters' + '<br>'
+ 'title = "Two-step, series, reversible reaction"          ## Graph Title' + '<br>'
+ 'xmin = 0                                                 ## X minimum' + '<br>'
+ 'xmax = end_points                                        ## X maximum' + '<br>'
+ 'ymin = 0                                                 ## Y minimum' + '<br>'
+ 'ymax = 0.01                                              ## Y maximum' + '<br>'

+ '## Add a title to the plot' + '<br>'
+ 'a += text(title,(xmax/1.8,ymax),color='black',fontsize=15)' + '<br>'

+ '## Add the desired lines to the plot' + '<br>'
+ 'a += list_plot(sols_1,color='orange',legend_label='[A1]')' + '<br>'
+ 'a += list_plot(sols_2,color='purple',legend_label='[A2]')' + '<br>'
+ 'a += list_plot(sols_3,color='green',legend_label='[A3]')' + '<br>'

+ '## For more information on plots in general, evaluate 'plot?'' + '<br>'
+ '## For a list of legend options, evaluate 'a.set_legend_options?'' + '<br>'
+ '## For a list of Sage predefined colors, evaluate 'sorted(colors)'' + '<br>'

+ 'a.set_axes_range(xmin,xmax,ymin,ymax)' + '<br>'
+ 'a.axes_labels(['time','concentration'])' + '<br>'
+ 'a.axes_label_color('grey')' + '<br>'
+ 'a.set_legend_options(ncol=3,borderaxespad=5,back_color='whitesmoke',fancybox=true)' + '<br>'

+ 'show(a)' + '<br>'


	)}

function data-fitting_01() {document.write(''

+ '# for this example, we first generate some data with built-in variance:' + '<br>'
+ 'data = [(i, 1.2 * sin(0.5*i-0.2) + 0.1 * normalvariate(0, 1)) for i in xsrange(0, 4*pi, 0.2)]' + '<br>'

+ '# design a model with adjustable parameters a,b,c that describes the data' + '<br>'
+ 'var('a, b, c, x')' + '<br>'
+ 'model(x) = a * sin(b * x - c)' + '<br>'

+ '# calculate the values of the parameters that best fit the model to the data' + '<br>'
+ 'sol = find_fit(data,model)' + '<br>'
+ 'show(sol)' + '<br>'

+ '# define f(x), the model with the parameters set to the fitted values' + '<br>'
+ 'f(x) = model(a=sol[0].rhs(),b=sol[1].rhs(),c=sol[2].rhs())' + '<br>'

+ '# create an empty plot object' + '<br>'
+ 'a = plot([])' + '<br>'
+ '# add a plot of the model, with respect to x from -0.5 to 12.5' + '<br>'
+ 'a += plot(f(x),x,[-0.5,12.5])' + '<br>'

+ '# add a plot of the data, in red' + '<br>'
+ 'a += list_plot(data,color='red')' + '<br>'
+ 'show(a)' + '<br>'


	)}

function fourier_01() {document.write(''

+ '## Interactive Fourier Series, via: http://www.walkingrandomly.com/?p=1879' + '<br>'
+ 'def ftermSquare(n):' + '<br>'
+ ' return(1/n*sin(n*x*pi/3))' + '<br>'

+ 'def ftermSawtooth(n):' + '<br>'
+ ' return(1/n*sin(n*x*pi/3))' + '<br>'

+ 'def ftermParabola(n):' + '<br>'
+ ' return((-1)^n/n^2 * cos(n*x))' + '<br>'

+ 'def fseriesSquare(n):' + '<br>'
+ ' return(4/pi*sum(ftermSquare(i) for i in range (1,2*n,2)))' + '<br>'

+ 'def fseriesSawtooth(n):' + '<br>'
+ ' return(1/2-1/pi*sum(ftermSawtooth(i) for i in range (1,n)))' + '<br>'

+ 'def fseriesParabola(n):' + '<br>'
+ ' return(pi^2/3 + 4*sum(ftermParabola(i) for i in range(1,n)))' + '<br>'

+ '@interact' + '<br>'
+ 'def plotFourier(n=slider(1, 30,1,3,'Number of terms')' + '<br>'
+ ',Function=['Square Wave','Saw Tooth','Periodic Parabola']):' + '<br>'
+ '    if Function=='Saw Tooth':' + '<br>'
+ '     show(plot(fseriesSawtooth(n),x,-6,6,figsize=(7,3)))' + '<br>'
+ '    if Function=='Square Wave':' + '<br>'
+ '     show(plot(fseriesSquare(n),x,-6,6,figsize=(7,3)))' + '<br>'
+ '    if Function=='Periodic Parabola':' + '<br>'
+ '     show(plot(fseriesParabola(n),x,-6,6,figsize=(7,3)))' + '<br>'


	)}

function graph-theory_01() {document.write(''

+ 'entry='this is total nonsense'' + '<br>'
+ 'phrase = list(entry)' + '<br>'
+ 'oc = phrase.pop(0)' + '<br>'
+ 'hash = {}' + '<br>'
+ 'for c in phrase:' + '<br>'
+ '    if(hash.has_key(oc)): hash[oc].append(c)' + '<br>'
+ '    else: hash[oc] = [c]' + '<br>'
+ '    oc = c' + '<br>'
+ 'DiGraph(hash).show(figsize=(5,5))' + '<br>'


	)}

function index_01() {document.write(''

+ 'show("Hello World!")' + '<br>'


	)}

function monte-carlo_01() {document.write(''

+ '### This script estimates pi by shooting randomly at a circle inscribed in a square' + '<br>'

+ 'var ('x y r n')' + '<br>'
+ 'r = 1' + '<br>'
+ 'n = 100  ## Try changing this! This is the number of shots the estimate is based on' + '<br>'
+ 'points = []' + '<br>'
+ 'inside = 0' + '<br>'

+ '### Shoot randomly into the square:' + '<br>'
+ 'for i in range(0,n):' + '<br>'
+ '    [x,y]=[random(),random()]' + '<br>'
+ '    points.append([x,y])' + '<br>'
+ '    ' + '<br>'
+ '### If a shot lands inside the circle, make a note of it' + '<br>'
+ '    if (y <= sqrt((r^2)-(x^2))):' + '<br>'
+ '	inside += 1' + '<br>'
+ '	' + '<br>'
+ '### Approximate pi based on the fraction of shots that landed in the circle' + '<br>'
+ '### Area of circle = pi*r^2' + '<br>'
+ '### Area of square = (2*r)^2 = 4*r^2' + '<br>'
+ '### Shots in circle / Shots in square = (pi*r^2)/(4*r^20 = pi()/4' + '<br>'

+ 'piapprox = 4*(inside / n)' + '<br>'
+ 'estimate = "Based on "' + '<br>'
+ 'estimate += str(n)' + '<br>'
+ 'estimate += " shots, pi is ~= "' + '<br>'
+ 'estimate += str(piapprox.n())' + '<br>'

+ 'show(estimate)' + '<br>'

+ '### Graph the solution' + '<br>'
+ 'circle = []' + '<br>'
+ 'for i in range(0,1000):' + '<br>'
+ '    x = i/1000' + '<br>'
+ '    y = sqrt((r^2)-(i/1000)^2)' + '<br>'
+ '    circle.append([x,y])' + '<br>'

+ 'graph = list_plot(points)' + '<br>'
+ 'graph += list_plot(circle,color='red',figsize=[5,4],plotjoined=true)' + '<br>'
+ 'show(graph)' + '<br>'


	)}

function nonlinear-systems_01() {document.write(''

+ '### Simulates Lotka-Volterra population dynamics, producing a vector field' + '<br>'
+ '### Arrows indicate the direction of population evolution' + '<br>'
+ '### The blue contour is one potential stable loop' + '<br>'
+ 'var('t R F R0 F0 a b c d')' + '<br>'
+ '## CONSTANTS' + '<br>'
+ 'a = 0.04         # rabbit birthrate' + '<br>'
+ 'b = 0.0005       # probability of predation per encounter' + '<br>'
+ 'c = 0.1*0.0005   # probability of predation per encounter, rabbit -> fox conversion efficiency' + '<br>'
+ 'd = 0.2          # death rate of foxes' + '<br>'
+ '## INITIAL CONDITIONS' + '<br>'
+ 'R0 = 5000     #initial number of rabbits' + '<br>'
+ 'F0 = 200      #initial number of foxes' + '<br>'

+ '## DIFFERENTIAL EQUATIONS' + '<br>'
+ 'de_R = (diff(R,t) == a*R - b*R*F)' + '<br>'
+ 'de_F = (diff(F,t) == c*R*F - d*F)' + '<br>'

+ '## CALCULATION PARAMETERS' + '<br>'
+ 'end_points = 500' + '<br>'
+ 'stepsize = 1.0' + '<br>'
+ 'steps = end_points/stepsize' + '<br>'
+ 'ics = [0,R0,F0]' + '<br>'
+ 'des = [de_R.rhs(), de_F.rhs()]' + '<br>'

+ '## NUMERICAL SOLUTION OF DIFFERENTIAL EQUATIONS' + '<br>'
+ 'sol = desolve_system_rk4(des,[R,F],ics,ivar=t,end_points=end_points,step=stepsize)' + '<br>'

+ '## Clean up to graph' + '<br>'
+ 'sol_t=[]; sol_R=[]; sol_F=[]' + '<br>'
+ 'for i in range(steps):' + '<br>'
+ '    sol_t.append(sol[i][0])' + '<br>'
+ '    sol_R.append(sol[i][1])' + '<br>'
+ '    sol_F.append(sol[i][2])' + '<br>'
+ '    ' + '<br>'
+ 'a = plot([],figsize=[6,4])' + '<br>'
+ 'a += line(zip(sol_R,sol_F))' + '<br>'
+ 'a += plot_vector_field((des[0], des[1]), (R,0,7000), (F,0,225),xmin=1500,color='orange')' + '<br>'
+ 'a.axes_labels(['Rabbits','Foxes']); show(a)' + '<br>'


	)}

function plotting_01() {document.write(''

+ 'var('y x'); y = x^3' + '<br>'
+ 'plot(y,x,(-1,1))' + '<br>'


	)}

function plotting_02() {document.write(''

+ 'var('y x'); y = x^3' + '<br>'
+ 'plot(y,x,(-1,1),figsize=(4,4))' + '<br>'


	)}

function plotting_03() {document.write(''

+ 'var('y x'); y = x^3' + '<br>'
+ 'plot(y,x,(-1,1),figsize=(4,4),title="Here is a Graph")' + '<br>'


	)}

function plotting_04() {document.write(''

+ 'var('y x'); y = x^3' + '<br>'
+ 'a = plot([],figsize=(4,4),title="Here is a Graph")' + '<br>'
+ 'a += plot(y,x,(-1,1))' + '<br>'
+ 'show(a)' + '<br>'


	)}

function plotting_05() {document.write(''

+ 'var('x'); y = x^3; g = -x' + '<br>'
+ 'a = plot([],figsize=(4,4),title="Here is a Graph")' + '<br>'
+ 'a += plot(y,x,(-1,1))' + '<br>'
+ 'a += plot(g,x,(-1,1))' + '<br>'
+ 'show(a)' + '<br>'


	)}

function plotting_06() {document.write(''

+ 'var('y x'); y = x^3; g = -x' + '<br>'
+ 'a = plot([],figsize=(4,4),title="Here is a Graph")' + '<br>'
+ 'a += plot(y,x,(-1,1),color='red',legend_label='f(x)')' + '<br>'
+ 'a += plot(g,x,(-1,1),color='green',linestyle='--',thickness=5,legend_label='g(x)')' + '<br>'
+ 'show(a)' + '<br>'


	)}

function plotting_07() {document.write(''

+ 'var('y x'); y = x^3; g = -x' + '<br>'
+ 'a = plot([],figsize=(4,4),title="Here is a Graph")' + '<br>'
+ 'a += plot(y,x,(-1,1),color='red',legend_label='f(x)')' + '<br>'
+ 'a += plot(g,x,(-1,1),color='green',linestyle='--',thickness=5,legend_label='g(x)')' + '<br>'
+ 'a += circle((0.0,-0.5),0.5,color='blue')' + '<br>'
+ 'a += polygon([(0.1,0.3),(0.5,0.3),(0.1,0.7)],color='orange',fill=False)' + '<br>'
+ 'show(a)' + '<br>'


	)}

function plotting_08() {document.write(''

+ 'var('y x'); y = x^3; g = -x' + '<br>'
+ 'a = plot([],figsize=(4,4),title='Here is a Graph',frame=True,axes_labels=['$x$-axis, units','$y$-axis, units'])' + '<br>'
+ 'a += plot(y,x,(-1,1),color='red',legend_label='f(x)')' + '<br>'
+ 'a += plot(g,x,(-1,1),color='green',linestyle='--',thickness=5,legend_label='g(x)')' + '<br>'
+ 'a += circle((0.0,-0.5),0.5,color='blue')' + '<br>'
+ 'a += polygon([(0.1,0.3),(0.5,0.3),(0.1,0.7)],color='orange',fill=False)' + '<br>'
+ 'show(a)' + '<br>'


	)}

function plotting_09() {document.write(''

+ 'var('y x'); y = x^3; g = -x' + '<br>'
+ 'a = plot([],figsize=(4,4),title='Here is a Graph',frame=True)' + '<br>'
+ 'a += plot(y,x,(-1,1),color='red',legend_label='f(x)')' + '<br>'
+ 'a += plot(g,x,(-1,1),color='green',linestyle='--',thickness=5,legend_label='g(x)')' + '<br>'
+ 'a += circle((0.0,-0.5),0.5,color='blue')' + '<br>'
+ 'a += polygon([(0.1,0.3),(0.5,0.3),(0.1,0.7)],color='orange',fill=False)' + '<br>'
+ 'a.axes_labels(['$x$-axis, units','$y$-axis, units'])' + '<br>'
+ 'a.axes_label_color('darkgrey')' + '<br>'
+ 'a.set_legend_options(ncol=2,back_color='whitesmoke',fancybox=true,loc=9)' + '<br>'
+ 'a.set_axes_range(-1,1,-1,1)' + '<br>'
+ 'show(a)' + '<br>'


	)}

function plotting_10() {document.write(''

+ 'des = lambda t,y: [sin(t)]' + '<br>'
+ 'Q = ode_solver(function=des, y_0=[0])' + '<br>'
+ 'Q.ode_solve(t_span=[-2*pi(),2*pi()], num_points=100)' + '<br>'
+ 'a = plot([],figsize=(4,4),title='Here is Another Graph',frame=True)' + '<br>'
+ 'a += list_plot(Q.interpolate_solution())' + '<br>'
+ 'show(a)' + '<br>'


	)}

function stochastics_01() {document.write(''

+ '## This sheet simulates a reversible first-order chemical reaction:' + '<br>'
+ '## A1 <-> A2' + '<br>'
+ '## The section simulates this system with the Gillespie Algorithm' + '<br>'

+ '##################################' + '<br>'
+ '### Initialize a bunch of junk ###' + '<br>'
+ '##################################' + '<br>'
+ 'var('t dt tf Tprint')' + '<br>'
+ 'var('at m i')' + '<br>'
+ 'X = [0,0]            ## holds [chemicals]' + '<br>'
+ 'X0 = [50,0]          ## holds ICs' + '<br>'
+ 'k = [10,1]           ## holds rate constants' + '<br>'
+ 'a = [0,0]            ## holds calc'd rxn rates' + '<br>'
+ 'r = [0,0]            ## holds the random numbers' + '<br>'
+ 'sol = []             ## holds the solution' + '<br>'

+ 't = 0                ## time, start' + '<br>'
+ 'tf = 1               ## time, end' + '<br>'
+ 'dt = tf/1000         ## time, step' + '<br>'
+ 'm = len(a)' + '<br>'
+ 'Tprint = t' + '<br>'
+ 'X = copy(X0)' + '<br>'

+ '###########################################' + '<br>'
+ '### Loop 0: continues until target time ###' + '<br>'
+ '###########################################' + '<br>'

+ 'while (t<tf):' + '<br>'
+ '    at = 0' + '<br>'
+ '    for j in range(0,m):' + '<br>'
+ '	a[j] = k[j]*X[j]' + '<br>'
+ '	at = at + a[j]' + '<br>'
+ '	r[j] = random()' + '<br>'
+ '    #show(a[1])' + '<br>'
+ '    t = t+(1/at)*ln(1/r[0])              ## next rxn occurs in time increment 'tau'' + '<br>'
+ '    while(t>=Tprint):                    ## until the next reaction occurs..' + '<br>'
+ '	sol.append([Tprint,X[0],X[1]])   ## the concentrations stay the same' + '<br>'
+ '	Tprint=Tprint+dt                 ## as time increments' + '<br>'
+ '    i = 1' + '<br>'
+ '    ' + '<br>'
+ '    while (i <= m):' + '<br>'
+ '	sum = 0' + '<br>'
+ '	for l in range(0,i):' + '<br>'
+ '	    sum = sum + a[l]' + '<br>'
+ '	if (sum > r[1]*at):            ' + '<br>'
+ '	    if (i == 1):' + '<br>'
+ '	        X[0] = X[0]-1' + '<br>'
+ '	        X[1] = X[1]+1' + '<br>'
+ '	        break' + '<br>'
+ '	    elif (i == 2):' + '<br>'
+ '	        X[0] = X[0]+1' + '<br>'
+ '	        X[1] = X[1]-1' + '<br>'
+ '	i = i + 1' + '<br>'
+ '#show(sol)' + '<br>'

+ 'solT = []' + '<br>'
+ 'solA = []' + '<br>'
+ 'solB = []' + '<br>'

+ 'for q in range(0,len(sol)):' + '<br>'
+ '    solT.append(sol[q][0])' + '<br>'
+ '    solA.append(sol[q][1])' + '<br>'
+ '    solB.append(sol[q][2])' + '<br>'

+ '## This section simulates the system by applying the law of mass action' + '<br>'
+ '## The initial value problem is solved by Runge-Kutta and the dynamics are graphed' + '<br>'

+ 'var('k1 k_1')' + '<br>'
+ 'var('A1 A2 t')' + '<br>'

+ 'k1 = k[0]' + '<br>'
+ 'k_1 = k[1]' + '<br>'

+ '## Calculation Parameters' + '<br>'
+ 'end_points = tf' + '<br>'
+ 'stepsize = dt' + '<br>'
+ 'steps = end_points/stepsize' + '<br>'
+ 'ics = [0,X0[0],X0[1]]' + '<br>'

+ '## Equations' + '<br>'
+ 'r1 = (diff(A1,t) == k_1*A2 - k1*A1)' + '<br>'
+ 'r2 = (diff(A2,t) == k1*A1 - k_1*A2)' + '<br>'

+ 'des = [r1.rhs(), r2.rhs()]' + '<br>'
+ 'sol = desolve_system_rk4(des,[A1,A2],ics,ivar=t,end_points=end_points,step=stepsize)' + '<br>'

+ '## Process the output into a form that can be graphed' + '<br>'
+ 'sols_1=[]' + '<br>'
+ 'sols_2=[]' + '<br>'

+ 'for i in range(steps):' + '<br>'
+ '    sols_1.append([sol[i][0],sol[i][1]])' + '<br>'
+ '    sols_2.append([sol[i][0],sol[i][2]])' + '<br>'

+ '################################################' + '<br>'
+ '####   Unnecessarily Fancy Plotting Stuff   ####' + '<br>'
+ '################################################' + '<br>'
+ '## Create a plot object' + '<br>'
+ 'a = list_plot([])' + '<br>'

+ '## Set the plot parameters' + '<br>'
+ 'title = "first-order reversible reaction"                ## Graph Title' + '<br>'
+ 'xmin = 0                                                 ## X minimum' + '<br>'
+ 'xmax = end_points                                        ## X maximum' + '<br>'
+ 'ymin = 0                                                 ## Y minimum' + '<br>'
+ 'ymax = (X0[0]+X0[1])                                     ## Y maximum' + '<br>'

+ '## Add a title to the plot' + '<br>'
+ 'a += text(title,(xmax/1.8,ymax),color='black',fontsize=15)' + '<br>'

+ '## Add the desired lines to the plot' + '<br>'
+ 'a += list_plot(sols_1,color='blue',legend_label='[A]')' + '<br>'
+ 'a += list_plot(sols_2,color='red',legend_label='[B]')' + '<br>'

+ 'a += list_plot(zip(solT,solA), color='blue')' + '<br>'
+ 'a += list_plot(zip(solT,solB), color='red', ymin=0, ymax=ymax)' + '<br>'

+ '## For more information on plots in general, evaluate 'plot?'' + '<br>'
+ '## For a list of legend options, evaluate 'a.set_legend_options?'' + '<br>'
+ '## For a list of Sage predefined colors, evaluate 'sorted(colors)'' + '<br>'

+ '#a.set_axes_range(xmin,xmax,ymin,ymax)' + '<br>'
+ 'a.axes_labels(['time','particle number'])' + '<br>'
+ 'a.axes_label_color('grey')' + '<br>'
+ 'a.set_legend_options(ncol=2,borderaxespad=5,back_color='whitesmoke',fancybox=true)' + '<br>'
+ 'show(a)' + '<br>'

	)}

function null_write() {document.write('')}
