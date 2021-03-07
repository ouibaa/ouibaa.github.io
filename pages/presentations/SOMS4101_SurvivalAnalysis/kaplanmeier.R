library(survival)

stage3 <- read.csv("./stage3.csv")
cancer <- read.csv("./cancerdata.csv")
View(data)

surv_table.stage3 <- survfit(Surv(days, censor) ~ 1, conf.type = "none", data = stage3)
surv_table.cancer <- survfit(Surv(months, censor) ~ 1, conf.type = "none", data = cancer)

summary(surv_table.cancer)
plot(surv_table.cancer, xlab = "Months", lty=1, ylab = "Survival probability", mark.time=TRUE)

# Disease free survival according to number of elevated tumor markers
# Elevated tumor markers NSE included
surv_table.cancer <- survfit(Surv(months, censor) ~ elevated_tm_all, data=cancer, conf.type="log-log")
# Elevated tumor markers NSE excluded
surv_table.cancer <- survfit(Surv(months, censor) ~ elevated_tm_noNSE, data=cancer, conf.type="log-log")
# Plot figure
plot(surv_table.cancer, xlab="Months", lty=1, col=c("blue", "red", "gold", "purple", "orange", "red"), ylab="Survival probability")
legend("topright", inset=0.05,
       c("0", "1", "2", "3", "4", "5"),
       col=c("red", "blue", "yellow", "orange", "purple", "green"),
       lty=1,
       lwd=2,
       cex=1)


# Nice plots
library(ggplot2)
library(survminer)
ggsurvplot(surv_table.cancer, 
           risk.table=TRUE,
           pval = TRUE,
           break.time.by = 12,
           ggtheme = theme_minimal(),
           risk.table.y.text.col = T,
           risk.table.y.text = FALSE,)

# Disease free survival for cases with none or one positive tumour marker vs cases with two or more positive tumor markers at time of diagnosis
# NSE included
surv_table.cancer <- survfit(Surv(months, censor) ~ DFS_NSE, data = cancer, conf.type="log-log")
# NSE not included
surv_table.cancer <- survfit(Surv(months, censor) ~ DFS_no_NSE, data=cancer, conf.type="log-log")
# Plot figure
plot(surv_table.cancer, xlab="Months", lty=1:2, ylab="Survival probability")
legend("topright", inset=0.05, c("0-1 positive tumor markers", "2 or more positive tumor markers"), 
       lty=1:2, lwd=2, cex=1)

logrank_trt<-survdiff(Surv(months, censor) ~ elevated_tm_all, rho=0, data = cancer)
logrank_trt
